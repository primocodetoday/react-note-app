import React from 'react';
import AppContext from '../../context'
import List from '../../components/List/List'

const TwitterView = () => (
  <AppContext.Consumer>
    {context => (
      <List items={context.twitter}/>
    )};
  </AppContext.Consumer>
);

export default TwitterView;