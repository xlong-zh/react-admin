import React from 'react';
import { TOKEN_KEY } from 'consts';
import { routersMap } from 'config/routers';
import { withRouter } from 'react-router-dom';

export function HocPrivate(C) {
  return withRouter(
    class extends React.Component {
      componentDidMount() {
        /* if (!localStorage.getItem(TOKEN_KEY)) {
         *   this.props.history.push(appRoutersMap.getPathByName('Login'));
         * }
         */
      }

      render() {
        return <C />;
      }
    }
  );
}
