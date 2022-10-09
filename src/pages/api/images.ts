import path from "path";
import fs from "fs";

import type { NextApiRequest, NextApiResponse } from "next";

import { DIR, FILE_EXTENSION, MAX_IMAGES } from "@/config";

type Data = {
  images: string[];
};

// Files appear to take a while to write... make sure they have existed for a little
const MIN_DIFF = 2000;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const files = await fs.promises.readdir(DIR);

  const now = new Date().getTime();

  const images = files
    .map((fileName) => {
      const stat = fs.statSync(DIR + "/" + fileName);
      return {
        name: fileName,
        time: stat.mtime.getTime(),
      };
    })
    .sort((a, b) => {
      return a.time - b.time;
    })
    .filter((f) => path.extname(f.name).toLowerCase() === `.${FILE_EXTENSION}`)
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
