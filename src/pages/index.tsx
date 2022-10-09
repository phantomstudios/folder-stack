import { useRef } from "react";

import { useFullscreen } from "rooks";
import Head from "next/head";
import type { NextPage } from "next";

import useImages from "@/hooks/useImages";
import { ImageStack } from "@/components/ImageStack";

const Home: NextPage = () => {
  const images = useImages();
  const fullscreenContainerRef = useRef<HTMLDivElement>(null);
  const { toggleFullscreen } = useFullscreen({
    target: fullscreenContainerRef,
  });
  return (
    <div ref={fullscreenContainerRef} onClick={toggleFullscreen}>
      <Head>
        <title>Phantom Diffusion</title>
      </Head>
      <ImageStack images={images} />
    </div>
  );
};

export default Home;
