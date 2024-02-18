// routes.ts
import CustomCircularProgress from '../components/CustomCircularProgress';
import React, { Suspense } from 'react';
import { Navigate } from 'react-router-dom';

const NotFound = React.lazy(() => import('../pages/NotFound'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const Layout = React.lazy(() => import('../layout'));
const UserAuth = React.lazy(() => import('../pages/auth'));
const Posts = React.lazy(() => import('../pages/Posts/List'));
const PostAdd = React.lazy(() => import('../pages/Posts/Add'));
const PostEdit = React.lazy(() => import('../pages/Posts/Edit'));
const Draft = React.lazy(() => import('../pages/Drafts/List'));
const DraftAdd = React.lazy(() => import('../pages/Drafts/Add'));
const DraftEdit = React.lazy(() => import('../pages/Drafts/Edit'));
const Categories = React.lazy(() => import('../pages/Categories/List'));
const CategoriesAdd = React.lazy(() => import('../pages/Categories/Add'));
const CategoriesEdit = React.lazy(() => import('../pages/Categories/Edit'));
const Tags = React.lazy(() => import('../pages/Tags/List'));
const TagsAdd = React.lazy(() => import('../pages/Tags/Add'));
const TagsEdit = React.lazy(() => import('../pages/Tags/Edit'));
const ImagesList = React.lazy(() => import('../pages/Images/List'));
const AddImages = React.lazy(() => import('../pages/Images/Add'));
const UsersList = React.lazy(() => import('../pages/Users/List'));
const UsersAdd = React.lazy(() => import('../pages/Users/Add'));
const UsersEdit = React.lazy(() => import('../pages/Users/Edit'));
const ClientUser = React.lazy(() => import('../pages/ClientUser/List'));
const Roles = React.lazy(() => import('../pages/Roles/List'));
const RolesAdd = React.lazy(() => import('../pages/Roles/Add'));
const RolesEdit = React.lazy(() => import('../pages/Roles/Edit'));

interface RouteConfig {
  path?: any;
  element: any;
  children?: any;
  errorElement?: any;
}

const routes: RouteConfig[] = [
  {
    // parent route component
    element: (
      <Suspense fallback={<CustomCircularProgress color='inherit' />}>
        <Layout type='mini' />
      </Suspense>
    ),
    errorElement: <Navigate to='/404' />,
    // child route components
    children: [{ path: '/', element: <UserAuth type='sign-in' /> }],
  },
  {
    // parent route component
    element: (
      <Suspense fallback={<CustomCircularProgress color='inherit' />}>
        <Layout type='main' />
      </Suspense>
    ),
    errorElement: <Navigate to='/404' />,
    // child route components
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/posts/list', element: <Posts /> },
      { path: '/posts/add', element: <PostAdd /> },
      { path: '/posts/edit/:id', element: <PostEdit /> },
      { path: '/draft/list', element: <Draft /> },
      { path: '/draft/add', element: <DraftAdd /> },
      { path: '/draft/edit/:id', element: <DraftEdit /> },
      { path: '/categories/list', element: <Categories /> },
      { path: '/categories/add', element: <CategoriesAdd /> },
      { path: '/categories/edit/:id', element: <CategoriesEdit /> },
      { path: '/tags/list', element: <Tags /> },
      { path: '/tags/add', element: <TagsAdd /> },
      { path: '/tags/edit/:id', element: <TagsEdit /> },
      { path: '/images/list', element: <ImagesList /> },
      { path: '/images/add', element: <AddImages /> },
      { path: '/users/list', element: <UsersList /> },
      { path: '/users/add', element: <UsersAdd /> },
      { path: '/users/edit/:id', element: <UsersEdit /> },
      { path: '/clientUser/list', element: <ClientUser /> },
      { path: '/roles/list', element: <Roles /> },
      { path: '/roles/add', element: <RolesAdd /> },
      { path: '/roles/edit/:id', element: <RolesEdit /> },
    ],
  },
  {
    path: '/404',
    element: (
      <Suspense fallback={<CustomCircularProgress color='inherit' />}>
        <NotFound />
      </Suspense>
    ),
  },
];

export default routes;
