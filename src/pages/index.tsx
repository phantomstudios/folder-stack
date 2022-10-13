import { useRef } from "react";

import { useFullscreen } from "rooks";
import Head from "next/head";
import type { NextPage } from "next";

import useScrollLock from "@/hooks/useScrollLock";
import useImages from "@/hooks/useImages";
import { DISABLE_SCROLL, STACK_TRANSFORM } from "@/config";
import { Positioner } from "@/components/Positioner";
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
        <Positioner {...STACK_TRANSFORM}>
          <ImageStack images={images} />
        </Positioner>
      </div>
    </>
  );
};

export default Home;
