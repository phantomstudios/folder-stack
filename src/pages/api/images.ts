import path from "path";
import fs from "fs";

import recursive from "recursive-readdir";
import type { NextApiRequest, NextApiResponse } from "next";

import { DIR, FILE_EXTENSION, MAX_IMAGES, RECURSIVE } from "@/config";

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
    ? await recursive(DIR)
    : (await fs.promises.readdir(DIR)).map((f) => path.join(DIR, f));

  const now = new Date().getTime();

  const images = files
    .map((fileName) => {
      const stat = fs.statSync(fileName);
      return {
        name: path.relative(DIR, fileName),
        time: stat.mtime.getTime(),
      };
    })
    .sort((a, b) => {
      return a.time - b.time;
    })
    .filter(
      (f) =>
        path.extname(f.name).toLowerCase() ===
        `.${FILE_EXTENSION}`.toLowerCase()
    )
    .filter((f) => {
      const diff = now - f.time;
      return diff > MIN_DIFF;
    })
    .reverse()
    .map((f) => {
      return f.name;
    });

  res.status(200).json({ images: images.slice(0, MAX_IMAGES) });
}
