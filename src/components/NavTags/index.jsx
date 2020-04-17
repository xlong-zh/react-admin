import React, { useState, useEffect } from 'react';
import { useRouter } from 'components/hook/Router';
import { routersMap } from 'config/routers';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

export const NavTags = (props) => {
  const router = useRouter();
  const currentRoute = [routersMap.getRouterByPath(router.location.pathname)];

  const [hasNavRouter, setHasNavRouter] = useState(currentRoute);

  useEffect(() => {
    if (!hasNavRouter.map((res) => res.path).includes(router.location.pathname)) {
      setHasNavRouter([...hasNavRouter, ...currentRoute]);
    }
  }, [router.location.pathname]);
  const onChange = (key) => {
    console.log(key);
  };
  const onEdit = (targetKey, action) => {
    console.log(targetKey);
    console.log(action);
    // this[action](targetKey);
  };
  return (
    <div>
      <Tabs defaultActiveKey="1" type="editable-card" hideAdd onChange={onChange} onEdit={onEdit}>
        {hasNavRouter.map((res) => (
          <TabPane tab={res.name} key={res.path}></TabPane>
        ))}
      </Tabs>
    </div>
  );
};
