import { ReactNode } from "react";

import styles from "./Rotator.module.css";

interface Props {
  rotate?: boolean;
  children?: ReactNode;
}

export const Rotator = ({ rotate, children }: Props) =>
  rotate ? <div className={styles.main}>{children}</div> : <>{children}</>;
