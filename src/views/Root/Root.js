import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './Root.module.scss';
import AppContext from '../../context';
import { TubersView, ArticlesView, NotesView } from '..';
import { Header } from '../../components';
import Modal from '../../components/Modal/Modal';

const Root = () => {
  const [data, setData] = useState({
    tuber: [
      {
        image: 'https://yt3.ggpht.com/a-/AAuE7mB9US7p_L1MTLEsQMYcXRvqjdv6ZBmOKvZFfg=s240-mo-c-c0xffffffff-rj-k-no',
        title: 'Techmoan',
        description:
          'Featuring the best and worst of new and old technology. The UK’s most popular Tech Channel that doesn’t review smartphones. ',
        link: 'https://www.youtube.com/user/Techmoan',
      },
      {
        image: 'https://yt3.ggpht.com/a/AATXAJwIHOTspfmIL24Bcr_aIor6CI-Q0zifWQ7vIA=s100-c-k-c0xffffffff-no-rj-mo',
        title: 'Marques Brownlee',
        description: 'Quality Tech Videos | YouTuber | Geek | Consumer Electronics | Tech Head | Internet Personality!',
        link: 'https://www.youtube.com/user/marquesbrownlee',
      },
      {
        image: 'https://yt3.ggpht.com/a/AATXAJzGUJdH8PJ5d34Uk6CYZmAMWtam2Cpk6tU_Qw=s100-c-k-c0xffffffff-no-rj-mo',
        title: 'Linus Tech Tips',
        description: 'Tech can be complicated; we try to make it easy.',
        link: 'https://twitter.com/mjackson',
      },
      {
        image: 'https://yt3.ggpht.com/a/AATXAJwnqxvNhYPZtO7JRSR8d7U0mJOkYXb-XfBtSw=s100-c-k-c0xffffffff-no-rj-mo',
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
  });

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const addItem = (e, newItem) => {
    e.preventDefault();
    setData((prevState) => ({
      ...data,
      [newItem.type]: [...prevState[newItem.type], newItem],
    }));
    closeModal();
  };

  const contextElements = {
    ...data,
    addItem,
  };

  return (
    <BrowserRouter>
      <AppContext.Provider value={contextElements}>
        <div className={styles.wrapper}>
          <Header openModalFn={openModal} />
          <Switch>
            <Route exact path="/" component={TubersView} />
            <Route path="/articles" component={ArticlesView} />
            <Route path="/notes" component={NotesView} />
          </Switch>
          {isModalOpen && <Modal closeModalFn={closeModal} />}
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  );
};

export default Root;

// 2. fill categories with own data
// 4. Validate all props
