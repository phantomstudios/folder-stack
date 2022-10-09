import { useRef } from "react";

import { useFullscreen } from "rooks";
import Head from "next/head";
import type { NextPage } from "next";

import useImages from "@/hooks/useImages";
import { STACK_TRANSFORM } from "@/config";
import { Positioner } from "@/components/Positioner";
import { ImageStack } from "@/components/ImageStack";

const Home: NextPage = () => {
  const images = useImages();
  const fullscreenContainerRef = useRef<HTMLDivElement>(null);
  const { toggleFullscreen } = useFullscreen({
    target: fullscreenContainerRef,
  });
  return (
    <>
      <Head>
        <title>Phantom Diffusion</title>
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
