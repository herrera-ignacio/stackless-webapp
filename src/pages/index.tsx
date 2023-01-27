import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import HeadBase from '@components/HeadBase';
import Layout from '@components/Layout';
import HeroSection from 'sections/Hero';
import AboutSection from 'sections/About';
import ServicesSection from 'sections/Services';
import TestimonialsSection from 'sections/Testimonials';

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <TestimonialsSection />
  </Layout>
);

export default IndexPage;

export const Head: HeadFC = HeadBase('Stackless');
