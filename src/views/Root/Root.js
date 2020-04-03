import React from 'react';
import TwitterView from '../TwitterView/TwitterView'
import ArticlesView from '../ArticlesView/ArticlesView'
import NotesView from '../NotesView/NotesView'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from '../../components/Header/Header'
import Modal from '../../components/Modal/Modal'

import List from '../../components/List/List';
import '../../index.css';
import Form from '../../components/Form/Form'
import danAbramovImage from '../../assets/images/danabramov.jpg';
import ryanFlorenceImage from '../../assets/images/ryanflorence.jpg';
import michaelJacksonImage from '../../assets/images/michaeljackson.jpg';
import kentCDoddsImage from '../../assets/images/kentcdodds.jpg';



const initialStateItems = [
  {
      image: danAbramovImage,
      name: 'Dan Abramov',
      description: 'Working on @reactjs. The demo guy.',
      twitterLink: 'https://twitter.com/dan_abramov',
  },
  {
      image: ryanFlorenceImage,
      name: 'Ryan Florence',
      description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
      twitterLink: 'https://twitter.com/ryanflorence',
  },
  {
      image: michaelJacksonImage,
      name: 'Michael Jackson',
      description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
      twitterLink: 'https://twitter.com/mjackson',
  },
  {
      image: kentCDoddsImage,
      name: 'Kent C. Dodds',
      description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
      twitterLink: 'https://twitter.com/kentcdodds',
  },
];

class Root extends React.Component {
  state = {
    items: [...initialStateItems],
    isModalOpen: true
  }

  addItem = (e) => {
    e.preventDefault();
    const newItem = {
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value,
    }

    this.setState(prevState =>({
      items: [...prevState.items, newItem],
    }));

    e.target.reset();
  };

  openModal = () => {
    this.setState({
      isModalOpen: true
    })
  }
  closeModal = () => {
    this.setState({
      isModalOpen: false
    })
  }


  render() {
    const { isModalOpen } = this.state;
    
    return (
      <BrowserRouter>
        <>
          <Header openModalFn={this.openModal}/>
          <h1>hello world</h1>
          <Switch>
            <Route exact path='/' component={TwitterView} />
            <Route path='/articles' component={ArticlesView} />
            <Route path='/notes' component={NotesView} />
          </Switch>
          {isModalOpen && <Modal closeModalFn = {this.closeModal} />}
        </>
      </BrowserRouter>

      // <div>
      //   <List 
      //     items={this.state.items}
      //   />
      //   <Form submitFn={this.addItem}/>
      // </div>
    );
  }
};

export default Root;

