import React, { useState, useEffect } from 'react';
import { useRouter } from 'components/hook/Router';
import { routersMap } from 'config/routers';
import { Tabs, message } from 'antd';

const { TabPane } = Tabs;

export const NavTags = (props) => {
  const router = useRouter();
  const homeRoute = routersMap.getRouterByPath('/');
  const currentRoute = routersMap.getRouterByPath(router.location.pathname);

  const [hasNavRouter, setHasNavRouter] = useState(
    router.location.pathname === '/' ? [homeRoute] : [homeRoute, currentRoute]
  );
  const [activeKey, setActiveKey] = useState(currentRoute.path);

  useEffect(() => {
    setActiveKey(currentRoute.path);
    if (!hasNavRouter.map((res) => res.path).includes(router.location.pathname)) {
      setHasNavRouter([...hasNavRouter, currentRoute]);
    }
    // eslint-disable-next-line
  }, [router.location.pathname]);

  const onChange = (key) => {
    router.history.push(key);
  };
  const onEdit = (targetKey, action) => {
    if (action === 'remove') {
      remove(targetKey);
    }
  };
  const remove = (targetKey) => {
    if (targetKey === '/') {
      message.warning('首页不能关闭');
      return;
    }
    let newActiveKey = activeKey;
    let lastIndex;
    hasNavRouter.forEach((pane, i) => {
      if (pane.path === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = hasNavRouter.filter((pane) => pane.path !== targetKey);
    if (panes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = panes[lastIndex].path;
      } else {
        newActiveKey = panes[0].path;
      }
      if (newActiveKey !== activeKey) {
        router.history.push('/');
      }
    }
    setHasNavRouter(panes);
    setActiveKey(newActiveKey);
  };

  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        type="editable-card"
        activeKey={activeKey}
        hideAdd
        onChange={onChange}
        onEdit={onEdit}
      >
        {hasNavRouter.map((res) => (
          <TabPane tab={res.name} key={res.path}></TabPane>
        ))}
      </Tabs>
    </div>
  );
};
