import { Transform } from "@/components/Positioner";

export const ROOT_DIRECTORY = `${process.cwd()}/samples`; // Can be absolute or relative to the project root
export const RECURSIVE = true;
export const MAX_IMAGES = 8;
export const POLL_INTERVAL = 5 * 1000; // 5 seconds
export const RETRY_INTERVAL = 10 * 1000; // 10 seconds
export const FILE_EXTENSIONS = ["jpg", "jpeg", "png", "gif"];
export const SHOW_TITLE = false;
export const DISABLE_SCROLL = true;

export const STACK_TRANSFORM: Transform = {
  position: {
    x: "100%",
    y: 0,
  },
  size: {
    width: 256,
    height: 1265,
  },
  rotation: 90,
};
