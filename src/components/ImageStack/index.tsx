/* eslint-disable @next/next/no-img-element */
import { getTitle } from "@/utils/images";
import { MAX_WIDTH, SHOW_TITLE } from "@/config";

import styles from "./ImageStack.module.css";

interface Props {
  images?: string[];
}

export const ImageStack = ({ images = [] }: Props) => (
  <ul
    className={styles.list}
    style={{
      maxWidth: MAX_WIDTH,
    }}
  >
    {images.map((image) => (
      <li key={image}>
        {SHOW_TITLE && <h2>{getTitle(image)}</h2>}
        <img src={`/api/image?image=${image}`} alt={image} />
      </li>
    ))}
  </ul>
);
