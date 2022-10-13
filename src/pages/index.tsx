import { useRef } from "react";

import { useFullscreen } from "rooks";
import Head from "next/head";
import type { NextPage } from "next";

import useScrollLock from "@/hooks/useScrollLock";
import useImages from "@/hooks/useImages";
import { DISABLE_SCROLL, STACK_STYLE } from "@/config";
import { ImageStack } from "@/components/ImageStack";

const Home: NextPage = () => {
  const images = useImages();
  const fullscreenContainerRef = useRef<HTMLDivElement>(null);
  const { toggleFullscreen } = useFullscreen({
    target: fullscreenContainerRef,
  });

  useScrollLock(DISABLE_SCROLL);

  return (
    <>
      <Head>
        <title>Folder Stack</title>
      </Head>
      <div ref={fullscreenContainerRef} onClick={toggleFullscreen}>
        <ImageStack style={STACK_STYLE} images={images} />
      </div>
    </>
  );
};

export default Home;
