import { ReactNode } from "react";

import styles from "./Positioner.module.css";

interface Position {
  x?: string | number;
  y?: string | number;
  width?: string | number;
  height?: string | number;
  rotation?: number;
}

interface Props extends Position {
  children?: ReactNode;
}

export const Positioner = ({ children, ...position }: Props) => (
  <div
    className={styles.main}
    style={{
      left: position.x,
      top: position.y,
      width: position.width,
      height: position.height,
      transform: `rotate(${position.rotation}deg)`,
    }}
  >
    {children}
  </div>
);
