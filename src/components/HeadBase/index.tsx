import React from 'react';

/**
 * This extends Gatsby default Head.
 * @param title
 * @returns Head component to be used by Gatsby.
 */
const HeadBase = (title: string) => function Head() {
  return (
    <>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/img/favicon.svg" />
      <link rel="preload" key="poppins" href="/fonts/Poppins/Poppins-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      <link rel="preload" key="teko" href="/fonts/Teko/Teko-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
    </>
  );
};

export default HeadBase;
