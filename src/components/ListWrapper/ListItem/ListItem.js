import React from 'react';
import './ListItem.css';
import PropTypes from 'prop-types';

// const ListItem = (props) => (
//   <li className='list-item__wrapper'>
//     <img 
//       src={props.image} 
//       alt={props.name}
//       className="list-item__image"/>
//     <div>
//       <h2 className='list-item__name'>{props.name}</h2>
//       <p className='list-item__description'>{props.description}</p>
//       <a href={props.twitterLink}>
//         <button className='list-item__button'>visit twitter</button>
//       </a>
//     </div>
//   </li>
// )

const ListItem = ({name, description, image, twitterLink}) => (
  <li className='list-item__wrapper'>
    <img 
      src={image} 
      alt={name}
      className="list-item__image"/>
    <div>
      <h2 className='list-item__name'>{name}</h2>
      <p className='list-item__description'>{description}</p>
      <a href={twitterLink}>
        <button className='list-item__button'>visit twitter</button>
      </a>
    </div>
  </li>
);
//deklarowanie propsów
ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  twitterLink: PropTypes.string.isRequired,
}
ListItem.defaultProps = {
  description: 'One o the React guys'
}


export default ListItem