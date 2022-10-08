import fs from "fs";

import type { NextApiRequest, NextApiResponse } from "next";

import { DIR, MAX_IMAGES } from "@/config";

type Data = {
  images: string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const files = await fs.promises.readdir(DIR);

  const images = files
    .map(function (fileName) {
      const stat = fs.statSync(DIR + "/" + fileName);
      return {
        name: fileName,
        time: stat.mtime.getTime(),
      };
    })
    .sort(function (a, b) {
      return a.time - b.time;
    })
    .reverse()
    .map(function (v) {
      return v.name;
    });

  res.status(200).json({ images: images.slice(0, MAX_IMAGES) });
}
