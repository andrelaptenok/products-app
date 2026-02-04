import { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import { ROUTES } from '@shared/lib';
import { PageLoader } from '@shared/ui/PageLoader.tsx';

import { ProtectedRoute } from './ProtectedRoute';
import { PublicRoute } from './PublicRoute';

const LoginPage = lazy(() => import('@pages/Login/LoginPage'));
const ProductsPage = lazy(() => import('@pages/Products/ProductsPage'));
const NotFoundPage = lazy(() => import('@pages/NotFound/NotFoundPage'));

const appRoutes = [
  {
    path: ROUTES.LOGIN,
    element: <LoginPage />,
    wrapper: PublicRoute,
  },
  {
    path: ROUTES.PRODUCTS,
    element: <ProductsPage />,
    wrapper: ProtectedRoute,
  },
];

export const AppRoutes = () => (
  <Router>
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {appRoutes.map(({ path, element, wrapper: Wrapper }) => (
          <Route key={path} path={path} element={<Wrapper>{element}</Wrapper>} />
        ))}

        <Route path={ROUTES.ROOT} element={<Navigate to={ROUTES.PRODUCTS} replace />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  </Router>
);
