import { useCallback, useState, useEffect } from "react";

import { POLL_INTERVAL } from "@/config";

const useImages = () => {
  const [images, setImages] = useState<string[]>([]);

  const getImages = useCallback(async () => {
    const data = await fetch("/api/images");
    const json = await data.json();
    setImages(json.images);
    setTimeout(() => getImages(), POLL_INTERVAL);
  }, []);

  useEffect(() => {
    getImages();
  }, [getImages]);

  return images;
};

export default useImages;
