import { useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { Section } from './components/styles/Section';
import Header from './components/Header';
import Item from './components/Item';
import Menu from './components/Menu';
import Nav from './components/Nav';
import CartModal from './components/CartModal';
import GlobalStyles from './components/styles/global';
import data from './data';

function App() {
  const [filter, setFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);

  const contentAll = data.map((item) => {
    return <Item key={item.id} data={item} />;
  });

  const contentBreakFast = data
    .filter((item) => item.category === 'breakfast')
    .map((item) => <Item key={item.id} data={item} />);

  const contentLunch = data
    .filter((item) => item.category === 'lunch')
    .map((item) => <Item key={item.id} data={item} />);

  const contentShakes = data
    .filter((item) => item.category === 'shakes')
    .map((item) => <Item key={item.id} data={item} />);

  const filterHandler = (data) => {
    setFilter(data.toLowerCase());
  };

  const modalHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <Fragment>
      <GlobalStyles />
      {showModal && <CartModal modalHandler={modalHandler} />}
      <Nav modalHandler={modalHandler} />
      <Header />
      <Menu filterHandler={filterHandler} />
      <Section>
        {filter === 'all' && contentAll}
        {filter === 'breakfast' && contentBreakFast}
        {filter === 'lunch' && contentLunch}
        {filter === 'shakes' && contentShakes}
      </Section>
    </Fragment>
  );
}

export default App;
