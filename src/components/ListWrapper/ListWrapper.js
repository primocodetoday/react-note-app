import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';

const ListWrapper = (props) => (
  <ul className="list-wrapper__wrapper">
      {props.items.map(item => (
        // <ListItem
        //   image={item.image}
        //   name={item.name}
        //   description={item.description}
        //   link={item.twitterLink}
        // />
        <ListItem key={item.name} {...item} />
      ))}
  </ul>
);

export default ListWrapper