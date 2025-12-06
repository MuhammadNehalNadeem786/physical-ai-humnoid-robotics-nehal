import React from 'react';
import Layout from '@theme/Layout';
import DocsLayout from '../../components/DocsLayout/DocsLayout';

export default function DocsHome() {
  return (
    <Layout title="Docs — Chapters" description="Chapters and modules overview">
      <main>
        <DocsLayout />
      </main>
    </Layout>
  );
}
