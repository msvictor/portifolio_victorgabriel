import React from 'react';

import Head from 'next/head';

import { Test } from '#common/components';

const App: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Portifolio - Victor Gabriel</title>
      </Head>

      <Test />
    </div>
  );
};

export default App;
