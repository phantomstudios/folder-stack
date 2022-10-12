import { useEffect, useRef } from "react";

import { useFullscreen } from "rooks";
import Head from "next/head";
import type { NextPage } from "next";

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

  useEffect(() => {
    if (!DISABLE_SCROLL) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = old;
    };
  }, []);

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
