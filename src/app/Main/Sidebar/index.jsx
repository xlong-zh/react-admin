import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { routersMap } from 'config/routers';
import { modulesRouterTree } from 'config/routers';
import { useRouter } from 'components/hook/Router';
// import { withRouter } from 'react-router-dom';

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

const SidebarCs = () => {
  const router = useRouter();
  const currentRoute = routersMap.getRouterByPath(router.location.pathname);

  const [selectedKeys, setSelectedKeys] = useState(['Home']);
  const [openKeys, setOpenKeys] = useState([]);
  useEffect(() => {
    if (currentRoute.name !== selectedKeys[0]) {
      setSelectedKeys([currentRoute.name]);
    }
    // 只有2级菜单可用
    if (currentRoute.parentName) {
      setOpenKeys([currentRoute.parentName]);
    } else {
      setOpenKeys([]);
    }
  }, [router.location.pathname]);

  const handleClickItem = (e) => {
    const path = routersMap.getPathByName(e.key);
    router.history.push(path);
  };
  const handleOpenMenu = (e) => {
    setOpenKeys(e);
  };
  return (
    <div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onClick={handleClickItem}
        onOpenChange={handleOpenMenu}
      >
        {makeMenuTree(modulesRouterTree)}
      </Menu>
    </div>
  );
};

export const Sidebar = SidebarCs;
