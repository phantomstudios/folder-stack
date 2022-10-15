import { join } from "path";

import { CSSProperties } from "react";

// Basic scrollable column of images
export const ROOT_DIRECTORY = join(process.cwd(), "samples");
export const RECURSIVE = true;
export const MAX_IMAGES = 8;
export const POLL_INTERVAL = 5 * 1000; // 5 seconds
export const FILE_EXTENSIONS = ["jpg", "jpeg", "png", "gif"];
export const SHOW_TITLE = true;
export const DISABLE_SCROLL = true;

export const STACK_STYLE: CSSProperties = {
  position: "absolute",
  transformOrigin: "top left",
  left: "100%",
  top: 0,
  width: 256,
  height: 1265,
  transform: `rotate(${90}deg)`,
};
