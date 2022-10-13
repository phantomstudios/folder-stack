import { CSSProperties } from "react";

// Sample configuration for the `stairs/wall screen` at Phantom

export const ROOT_DIRECTORY = `${process.cwd()}/samples`; // Can be absolute or relative to the project root
export const RECURSIVE = true;
export const MAX_IMAGES = 8;
export const POLL_INTERVAL = 5 * 1000; // 5 seconds
export const RETRY_INTERVAL = 10 * 1000; // 10 seconds
export const FILE_EXTENSIONS = ["jpg", "jpeg", "png", "gif"];
export const SHOW_TITLE = true;
export const DISABLE_SCROLL = true;

export const STACK_STYLE: CSSProperties = {
  position: "absolute",
  left: "100%",
  top: 0,
  width: 256,
  height: 1265,
  transform: `rotate(${90}deg)`,
};
