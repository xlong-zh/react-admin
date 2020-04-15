import React from 'react';
import { CustomBrowserRouter } from 'components/hook/Router';
import { HocPrivate } from 'components/hoc/Private';
import { Route, Switch } from 'react-router-dom';
import { AppRouters } from 'config/routers';

export const Router = () => {
  return (
    <CustomBrowserRouter>
      <Switch>
        {AppRouters.map((i, idx) => {
          if (i.private) {
            i.component = HocPrivate(i.component);
          }

          return <Route key={idx} {...i}></Route>;
        })}
      </Switch>
    </CustomBrowserRouter>
  );
};
