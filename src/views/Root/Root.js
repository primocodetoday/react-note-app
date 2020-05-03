import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './Root.module.scss';
import AppContext from '../../context';
import { TubersView, ArticlesView, NotesView } from '..';
import { Header } from '../../components';
import Modal from '../../components/Modal/Modal';

class Root extends React.Component {
  state = {
    tuber: [
      {
        image:
          'https://yt3.ggpht.com/a/AATXAJx4mX_aT5yajphZCmPUOqBUXETaMX-wBSjY_Q=s88-c-k-c0x00ffffff-no-rj',
        title: 'Techmoan',
        description:
          'Featuring the best and worst of new and old technology. The UK’s most popular Tech Channel that doesn’t review smartphones. ',
        link: 'https://www.youtube.com/user/Techmoan',
      },
      {
        image:
          'https://yt3.ggpht.com/a/AATXAJwIHOTspfmIL24Bcr_aIor6CI-Q0zifWQ7vIA=s100-c-k-c0xffffffff-no-rj-mo',
        title: 'Marques Brownlee',
        description:
          'Quality Tech Videos | YouTuber | Geek | Consumer Electronics | Tech Head | Internet Personality!',
        link: 'https://www.youtube.com/user/marquesbrownlee',
      },
      {
        image:
          'https://yt3.ggpht.com/a/AATXAJzGUJdH8PJ5d34Uk6CYZmAMWtam2Cpk6tU_Qw=s100-c-k-c0xffffffff-no-rj-mo',
        title: 'Linus Tech Tips',
        description: 'Tech can be complicated; we try to make it easy.',
        link: 'https://twitter.com/mjackson',
      },
      {
        image:
          'https://yt3.ggpht.com/a/AATXAJwnqxvNhYPZtO7JRSR8d7U0mJOkYXb-XfBtSw=s100-c-k-c0xffffffff-no-rj-mo',
        title: 'LGR',
        description:
          'Weekly coverage of retro tech, PC games, and more! Classic computer gaming, Oddware, thrifting, Tech Tales, Sims, etc',
        link: 'https://www.youtube.com/user/phreakindee',
      },
    ],
    article: [
      {
        title: 'New iPhone 12: Everything we know about Apple’s 2020 iPhones',
        link: `https://www.tomsguide.com/news/latest-iphone-12-news`,
        description: `The iPhone 12 should be the biggest upgrade in years. Here's everything you need to know.`,
      },
    ],
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
