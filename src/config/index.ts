import { CSSProperties } from "react";

export const ROOT_DIRECTORY = `${process.cwd()}/samples`; // Can be absolute or relative to the project root
export const RECURSIVE = true;
export const MAX_IMAGES = 8;
export const POLL_INTERVAL = 5 * 1000; // 5 seconds
export const RETRY_INTERVAL = 10 * 1000; // 10 seconds
export const FILE_EXTENSIONS = ["jpg", "jpeg", "png", "gif"];
export const SHOW_TITLE = true;
export const DISABLE_SCROLL = false;

export const STACK_STYLE: CSSProperties = {
  maxWidth: 512,
  margin: "0px auto",
};
