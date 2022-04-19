import type { Component } from 'solid-js';
import { HopeProvider } from '@hope-ui/solid'

import Canvas from './Canvas'

const App: Component = () => {
  return (
    <HopeProvider>
      <Canvas />
    </HopeProvider>
  );
};

export default App;
