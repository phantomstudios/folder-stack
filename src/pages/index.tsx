import Head from "next/head";
import type { NextPage } from "next";

import useImages from "@/hooks/useImages";
import { ImageStack } from "@/components/ImageStack";

const Home: NextPage = () => {
  const images = useImages();
  return (
    <>
      <Head>
        <title>Phantom Diffusion</title>
      </Head>
      <ImageStack images={images} />
    </>
  );
};

export default Home;
