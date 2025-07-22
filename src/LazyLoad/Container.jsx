import React, { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('./BulkText'));

const Container = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default Container;
