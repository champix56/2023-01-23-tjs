import React, { lazy, Suspense } from 'react';

const LazyMemeSvgViewer = lazy(() => import('./MemeSvgViewer'));

const MemeSvgViewer = props => (
  <Suspense fallback={null}>
    <LazyMemeSvgViewer {...props} />
  </Suspense>
);

export default MemeSvgViewer;
