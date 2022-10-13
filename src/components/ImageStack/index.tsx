/* eslint-disable @next/next/no-img-element */
import { CSSProperties } from "react";

import { SHOW_TITLE } from "@/config";

import styles from "./ImageStack.module.css";

interface Props {
  images?: string[];
  style?: CSSProperties;
}

export const ImageStack = ({ images = [], style }: Props) => (
  <ul className={styles.list} style={style}>
    {images.map((image) => (
      <li key={image}>
        {SHOW_TITLE && <h2>{image}</h2>}
        <img src={`/api/image?image=${image}`} alt={image} />
      </li>
    ))}
  </ul>
);
