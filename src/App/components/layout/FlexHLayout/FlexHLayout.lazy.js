import React, { lazy, Suspense } from 'react';

const LazyFlexHLayout = lazy(() => import('./FlexHLayout'));

const FlexHLayout = props => (
  <Suspense fallback={null}>
    <LazyFlexHLayout {...props} />
  </Suspense>
);

export default FlexHLayout;
