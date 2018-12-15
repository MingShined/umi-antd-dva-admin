import React, { Component, Fragment } from 'react';
import { Layout, Menu, Icon, Avatar, Dropdown, Button, Popover } from 'antd';
import { connect } from 'dva';
import BaseProps from '../declare/baseProps';
const { Header } = Layout;

interface PageHeaderLayoutProps extends BaseProps {
  collapsed?: boolean;
}

// @connect(({ app: { menuStatus } }) => ({
//   collapsed: menuStatus.collapsed
// }))
export default class PageHeaderLayout extends Component<PageHeaderLayoutProps> {
  // handleToggleSideMeny = () => {
  //   const { collapsed, dispatch } = this.props;
  //   dispatch({
  //     type: 'app/updateSiderMenuStatus',
  //     payload: {
  //       collapsed: !collapsed
  //     }
  //   });
  // };
  render() {
    const content = (
      <div>
        <Button disabled style={{ border: 'none', display: 'block' }}>
          <Icon type="user" />
          个人中心
        </Button>
        <Button style={{ border: 'none', display: 'block' }}>
          <Icon type="logout" />
          登出
        </Button>
      </div>
    );
    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <Icon
          className="trigger"
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.handleToggleSideMeny}
          style={{ fontSize: '24px' }}
        />
        <Popover
          content={content}
          placement="topLeft"
          title="管理员权限"
          arrowPointAtCenter
        >
          <span
            style={{ cursor: 'pointer', float: 'right', marginRight: '20px' }}
          >
            <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
            管理员
          </span>
        </Popover>
      </Header>
    );
  }
}
