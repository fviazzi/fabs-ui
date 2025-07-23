import React from 'react'

import { Counter } from '@/components/Counter/Counter';
import { Example } from '@/components/shared/Example/Example';

export const Home = () => (
  <main className="min-h-screen flex flex-col items-center justify-center p-4">
    <h1 className="text-4xl font-bold mb-4">
      Welcome to {`testing`}
    </h1>
    <p className="mb-4">
      This is a React application generated with the Fabs UI Turbo generator.
    </p>
    <hr />
    <Example />
    <hr />
    <Counter />
  </main>
);
