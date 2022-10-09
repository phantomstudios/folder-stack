import { BLOCK_LEFT } from "@/config";

import styles from "./BottomBlocker.module.css";

export const BottomBlocker = () =>
  BLOCK_LEFT ? (
    <div className={styles.main} style={{ width: BLOCK_LEFT }} />
  ) : null;
