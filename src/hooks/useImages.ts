import { useCallback, useState, useEffect } from "react";

import { POLL_INTERVAL, RETRY_INTERVAL } from "@/config";

const useImages = () => {
  const [images, setImages] = useState<string[]>([]);

  const getImages = useCallback(async () => {
    try {
      const data = await fetch("/api/images");
      const json = await data.json();
      setImages(json.images);
      setTimeout(() => getImages(), POLL_INTERVAL);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      setTimeout(() => {
        getImages();
      }, RETRY_INTERVAL);
    }
  }, []);

  useEffect(() => {
    getImages();
  }, [getImages]);

  return images;
};

export default useImages;
