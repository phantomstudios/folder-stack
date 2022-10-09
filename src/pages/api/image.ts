import path from "path";
import fs from "fs";

import type { NextApiRequest, NextApiResponse } from "next";

import { DIR, FILE_MIME } from "@/config";

type QueryData = {
  image: string;
};

type Data = {
  images: string[];
  directoryPath: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const query = req.query as QueryData;
  const { image } = query;

  const filePath = path.join(DIR, image);
  const stat = fs.statSync(filePath);

  res.writeHead(200, {
    "Content-Type": FILE_MIME,
    "Content-Length": stat.size,
  });

  const readStream = fs.createReadStream(filePath);

  await readStream.pipe(res);
}
