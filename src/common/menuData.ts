import MenuBean, { MenuType } from 'src/common/menuBean';

const menuData: MenuBean[] = [
  {
    name: '主页',
    path: '/',
    icon: 'car',
    type: MenuType.Item
  },
  {
    name: '组件',
    path: 'car',
    icon: 'car',
    type: MenuType.SubMenu,
    children: [
      {
        name: '编辑器',
        path: '/editor',
        type: MenuType.Item
      },
      {
        name: '图表',
        path: '/chart',
        type: MenuType.Item
      },
    ]
  }
];

export default menuData;
