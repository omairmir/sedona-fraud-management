// components/Layout.tsx

import React from 'react';
import Head from 'next/head';

const Layout: React.FC<{ title: string,children:React.ReactNode }> = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        {/* Your header content */}
      </header>
      <main>{children}</main>
      <footer>
        {/* Your footer content */}
      </footer>
    </div>
  );
};

export default Layout;
