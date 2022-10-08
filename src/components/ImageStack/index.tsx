/* eslint-disable @next/next/no-img-element */
import styles from "./ImageStack.module.css";

interface Props {
  images?: string[];
}

export const ImageStack = ({ images = [] }: Props) => (
  <ul className={styles.list}>
    {images.map((image) => (
      <li key={image}>
        <img src={`/api/image?image=${image}`} alt={image} />
      </li>
    ))}
  </ul>
);
