import { uniqueId } from 'lodash';
import { useGlobalContext } from '../../../context/GlobalContext';
import { MdDashboard, MdOutlineAdminPanelSettings, MdFace6 } from 'react-icons/md';
import { BiSolidBookContent, BiBookContent } from 'react-icons/bi';
import { BsListColumns } from 'react-icons/bs';
import { RiListCheck3 } from 'react-icons/ri';
import { CiImageOn } from 'react-icons/ci';
import { CgListTree } from 'react-icons/cg';

const MenuItems = () => {
  const { userData } = useGlobalContext();
  const items = [
    {
      navlabel: true,
      subheader: 'Home',
      visibility: userData?.modulePermissions?.dashboard?.view,
    },

    {
      id: uniqueId(),
      title: 'Dashboard',
      icon: MdDashboard,
      href: '/dashboard',
      path: 'dashboard',
      visibility: userData?.modulePermissions?.dashboard?.view,
    },
    {
      navlabel: true,
      subheader: 'Blog',
      visibility:
        userData?.modulePermissions?.draft?.view ||
        userData?.modulePermissions?.posts?.view ||
        userData?.modulePermissions?.categories?.view ||
        userData?.modulePermissions?.tags?.view,
    },
    {
      id: uniqueId(),
      title: 'Posts',
      icon: BiSolidBookContent,
      href: '/posts/list',
      path: 'posts',
      visibility: userData?.modulePermissions?.posts?.view,
    },
    {
      id: uniqueId(),
      title: 'Draft',
      icon: BiBookContent,
      href: '/draft/list',
      path: 'draft',
      visibility: userData?.modulePermissions?.draft?.view,
    },
    {
      id: uniqueId(),
      title: 'Categories',
      icon: BsListColumns,
      href: '/categories/list',
      path: 'categories',
      visibility: userData?.modulePermissions?.categories?.view,
    },
    {
      id: uniqueId(),
      title: 'Tags',
      icon: RiListCheck3,
      href: '/tags/list',
      path: 'tags',
      visibility: userData?.modulePermissions?.tags?.view,
    },
    {
      navlabel: true,
      subheader: 'Galery',
      visibility: userData?.modulePermissions?.images?.view,
    },
    {
      id: uniqueId(),
      title: 'Images',
      icon: CiImageOn,
      href: '/images/list',
      path: 'images',
      visibility: userData?.modulePermissions?.images?.view,
    },
    {
      navlabel: true,
      subheader: 'Auth',
      visibility:
        userData?.modulePermissions?.users?.view || userData?.modulePermissions?.roles?.view,
    },
    {
      id: uniqueId(),
      title: 'Admin Users',
      icon: MdOutlineAdminPanelSettings,
      href: '/users/list',
      path: 'users',
      visibility: userData?.modulePermissions?.users?.view,
    },
    {
      id: uniqueId(),
      title: 'Client Users',
      icon: MdFace6,
      href: '/clientUser/list',
      path: 'clientUser',
      visibility: userData?.modulePermissions?.users?.view,
    },
    {
      id: uniqueId(),
      title: 'Roles',
      icon: CgListTree,
      href: '/roles/list',
      path: 'roles',
      visibility: userData?.modulePermissions?.roles?.view,
    },
  ];
  return { items };
};

export default MenuItems;
