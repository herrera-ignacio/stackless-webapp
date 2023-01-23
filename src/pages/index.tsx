import * as React from "react"
import { HeadBase } from "@components/HeadBase";
import type { HeadFC, PageProps } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      Stackless
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = HeadBase("Stackless");
