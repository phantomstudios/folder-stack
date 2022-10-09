import { useRef } from "react";

import { useFullscreen } from "rooks";
import Head from "next/head";
import type { NextPage } from "next";

import useImages from "@/hooks/useImages";
import { ROTATE } from "@/config";
import { Rotator } from "@/components/Rotator";
import { ImageStack } from "@/components/ImageStack";
import { BottomBlocker } from "@/components/BottomBlocker";

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
        <Rotator rotate={ROTATE}>
          <ImageStack images={images} />
        </Rotator>
        <BottomBlocker />
      </div>
    </>
  );
};

export default Home;
