import { lazy, LazyExoticComponent } from 'react';

export interface IRouter {
  path: string;
  children?: IRouter[];
  element: LazyExoticComponent<any>;
  errorElement?: LazyExoticComponent<any>;
}

export const routePath = {
  HomePage: '/',
  MyRecord: '/my-record',
  Column: '/column'
};

const configRoutes: IRouter[] = [
  {
    path: routePath.HomePage,
    element: lazy(() => import('libraries/layouts')),
    children: [
      {
        path: routePath.HomePage,
        element: lazy(() => import('modules/home'))
      },
      {
        path: routePath.MyRecord,
        element: lazy(() => import('modules/my-record'))
      },
      {
        path: routePath.Column,
        element: lazy(() => import('modules/column'))
      },

      // Not Found
      {
        path: '*',
        element: lazy(() => import('modules/404'))
      }
    ]
  },

  // Not Found
  {
    path: '*',
    element: lazy(() => import('modules/404'))
  }
];

export default configRoutes;
