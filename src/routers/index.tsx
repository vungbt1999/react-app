import { Routes, Route, BrowserRouter } from 'react-router-dom';
import configRoutes from './config';
import { Suspense } from 'react';
import Loading from 'libraries/loading';
import ErrorPage from 'modules/error';

export default function MasterRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {configRoutes.map((item, index) => {
          const routes = item.children || [];
          const Element = item.element;

          return (
            <Route
              path={item.path}
              element={
                <Suspense fallback={<Loading />}>
                  <Element />
                </Suspense>
              }
              key={index}
              errorElement={<ErrorPage />}
            >
              {routes.length > 0
                ? routes.map((routeItem, routeIndex) => {
                    const ChildElement = routeItem.element;

                    return (
                      <Route
                        path={routeItem.path}
                        element={
                          <Suspense fallback={<Loading />}>
                            <ChildElement />
                          </Suspense>
                        }
                        key={`${index}-${routeIndex}`}
                        errorElement={<ErrorPage />}
                      />
                    );
                  })
                : null}
            </Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}
