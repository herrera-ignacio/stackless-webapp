import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import HeadBase from '@components/HeadBase';
import Layout from '@components/Layout';

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <p>Stackless</p>
  </Layout>
);

export default IndexPage;

export const Head: HeadFC = HeadBase('Stackless');
