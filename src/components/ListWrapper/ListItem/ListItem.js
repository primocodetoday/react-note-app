import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

const ListItem = ({
    name,
    description,
    image,
    twitterLink
}) => (
  <li className="list-item__wrapper">
        <img 
            alt={name}
            src={image} 
            className="list-item__image" />
        <div>
            <h2 className="list-item__name">{name}</h2>
            <p className="list-item__description">{description}</p>
            <a href={twitterLink} className="list-item__button">visit twitter page</a>
        </div>
    </li>
)
ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    twitterLink: PropTypes.string.isRequired,
};
ListItem.defaultProps = {
    description: "One of the React creators",
}


export default ListItem;
