import React from 'react';
import { Menu } from 'antd';
import { routersMap } from 'config/routers';
import { modulesRouterTree } from 'config/routers';
// import { useRouter } from 'components/hook/Router';
// import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const { SubMenu } = Menu;

function makeMenuTree(tree) {
  if (!tree || !tree.length) {
    return null;
  }

  return tree.map((i) => {
    if (i.children) {
      return (
        <SubMenu
          key={i.name}
          title={
            <span>
              {i.icon && <i.icon></i.icon>}
              <span>{i.name}</span>
            </span>
          }
        >
          {makeMenuTree(i.children)}
        </SubMenu>
      );
    }
    return (
      <Menu.Item key={i.name}>
        {i.icon && <i.icon></i.icon>}
        <span>{i.name}</span>
      </Menu.Item>
    );
  });
}

class SidebarCs extends React.Component {
  handleClickItem = (e) => {
    const path = routersMap.getPathByName(e.key);
    // console.log(this.props);
    // useHistory().push(path);
    this.props.history.push(path);
  };
  render() {
    return (
      <div>
        <Menu
          theme="dark"
          mode="inline"
          // defaultSelectedKeys={['1']}
          // defaultOpenKeys={['sub1']}
          onClick={this.handleClickItem}
        >
          {makeMenuTree(modulesRouterTree)}
        </Menu>
      </div>
    );
  }
}
export const Sidebar = withRouter(SidebarCs);
