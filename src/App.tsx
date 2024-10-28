import React from 'react';

import { APIProvider } from '@/api/apiProvider';

import '@/i18n/i18next';
import '@/types/unistyles';

import { Navigator } from './navigation';

function App() {
  return (
    <APIProvider>
      <Navigator />
    </APIProvider>
  );
}

const AppEntryPoint = App;

/* if (process.env.STORYBOOK_ENABLED) {
  // AppEntryPoint = require('../.storybook').default;
} */

export default AppEntryPoint;
