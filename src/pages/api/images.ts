import { join, relative, extname } from "path";
import { readdirSync, statSync } from "fs";

import recursive from "recursive-readdir";
import type { NextApiRequest, NextApiResponse } from "next";

import {
  ROOT_DIRECTORY,
  FILE_EXTENSIONS,
  MAX_IMAGES,
  RECURSIVE,
} from "@/config";

type Data = {
  images: string[];
};

// Files appear to take a while to write... make sure they have existed for a little
const MIN_DIFF = 2 * 1000;

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const files = RECURSIVE
    ? await recursive(ROOT_DIRECTORY)
    : readdirSync(ROOT_DIRECTORY).map((f) => join(ROOT_DIRECTORY, f));

  const now = new Date().getTime();

  const images = files
    .map((fileName) => {
      const stat = statSync(fileName);
      return {
        name: relative(ROOT_DIRECTORY, fileName),
        time: stat.mtime.getTime(),
      };
    })
    // Sort by most recent
    .sort((a, b) => {
      if (a.time === b.time) {
        if (a.name < b.name) return 1;
        if (a.name > b.name) return -1;
        return 0;
      }
      return b.time - a.time;
    })
    // Filter by file extension
    .filter((f) =>
      FILE_EXTENSIONS.includes(extname(f.name).replace(".", "").toLowerCase())
    )
    // Filter by minimum time difference
    .filter((f) => {
      const diff = now - f.time;
      return diff > MIN_DIFF;
    })
    // Output only the file name
    .map((f) => f.name);

  // Limit to MAX_IMAGES
  res.status(200).json({ images: images.slice(0, MAX_IMAGES) });
}
