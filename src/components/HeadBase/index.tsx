import React from "react";

export const HeadBase = (title: string) => () => (
  <>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/img/favicon.ico" />
  </>
)
