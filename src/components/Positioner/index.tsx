import { ReactNode } from "react";

import styles from "./Positioner.module.css";

interface Point {
  x: string | number;
  y: string | number;
}

interface Size {
  width: string | number;
  height: string | number;
}

export interface Transform {
  position: Point;
  size: Size;
  rotation: number;
}

interface Props extends Transform {
  children?: ReactNode;
}

export const Positioner = ({ children, ...transform }: Props) => (
  <div
    className={styles.main}
    style={{
      left: transform.position.x,
      top: transform.position.y,
      width: transform.size.width,
      height: transform.size.height,
      transform: `rotate(${transform.rotation}deg)`,
    }}
  >
    {children}
  </div>
);
