import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';

const TubersView = () => (
  <AppContext.Consumer>
    {(context) => <List items={context.tuber} />}
  </AppContext.Consumer>
);

export default TubersView;
