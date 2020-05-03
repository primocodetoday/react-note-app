import React from 'react';
import styles from './Root.module.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContext from '../../context';
import TubersView from '../TuberView/TubersView';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import danAbramovImage from '../../assets/images/danabramov.jpg';
import ryanFlorenceImage from '../../assets/images/ryanflorence.jpg';
import michaelJacksonImage from '../../assets/images/michaeljackson.jpg';
import kentCDoddsImage from '../../assets/images/kentcdodds.jpg';

class Root extends React.Component {
  state = {
    tuber: [
      {
        image: danAbramovImage,
        title: 'Dan Abramov',
        description: 'Working on @reactjs. The demo guy.',
        link: 'https://twitter.com/dan_abramov',
      },
      {
        image: ryanFlorenceImage,
        title: 'Ryan Florence',
        description:
          'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
        link: 'https://twitter.com/ryanflorence',
      },
      {
        image: michaelJacksonImage,
        title: 'Michael Jackson',
        description:
          'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
        link: 'https://twitter.com/mjackson',
      },
      {
        image: kentCDoddsImage,
        title: 'Kent C. Dodds',
        description:
          'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
        link: 'https://twitter.com/kentcdodds',
      },
    ],
    article: [],
    note: [],
    isModalOpen: false,
  };

  addItem = (e, newItem) => {
    e.preventDefault();

    this.setState((prevState) => ({
      [newItem.type]: [...prevState[newItem.type], newItem],
    }));

    this.closeModal();
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const contextElements = {
      ...this.state,
      addItem: this.addItem,
    };

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <div className={styles.wrapper}>
            <Header openModalFn={this.openModal} />
            <Switch>
              <Route exact path="/" component={TubersView} />
              <Route path="/articles" component={ArticlesView} />
              <Route path="/notes" component={NotesView} />
            </Switch>
            {isModalOpen && <Modal closeModalFn={this.closeModal} />}
          </div>
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;

// 1. change twitters to tubers
// 2. fill categories with own data
// 3. Rewrite to hooks
// 4. Validate props
