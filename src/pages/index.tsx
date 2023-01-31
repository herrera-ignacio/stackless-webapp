import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import HeadBase from '@components/HeadBase';
import Layout from '@components/Layout';
import HeroSection from 'sections/hero';
import AboutSection from 'sections/about';
import ServicesSection from 'sections/services';
import TeamSection from 'sections/team';
import ContactSection from 'sections/contact';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
    </Layout>
  )
};

export default IndexPage;

export const Head: HeadFC = HeadBase('Stackless');
