import { join } from "path";
import { createReadStream, statSync } from "fs";

import type { NextApiRequest, NextApiResponse } from "next";
import mime from "mime";

import { ROOT_DIRECTORY } from "@/config";

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

  const filePath = join(ROOT_DIRECTORY, image);

  const stat = statSync(filePath);
  const mimeType = mime.getType(filePath);

  res.writeHead(200, {
    "Content-Type": mimeType || "application/octet-stream",
    "Content-Length": stat.size,
  });

  const readStream = createReadStream(filePath);

  await readStream.pipe(res);
}
