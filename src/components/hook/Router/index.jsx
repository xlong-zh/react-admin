import React, { useContext } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

const RouterContext = React.createContext({});

export const CustomBrowserRouter = ({ children }) => {
  return (
    <BrowserRouter>
      <Route>{p => <RouterContext.Provider value={p}>{children}</RouterContext.Provider>}</Route>
    </BrowserRouter>
  );
};

export function useRouter() {
  return useContext(RouterContext);
}
