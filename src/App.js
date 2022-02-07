import { useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Header from './components/Header';
import Item from './components/Item';
import Menu from './components/Menu';
import GlobalStyles from './components/styles/global';
import data from './data';

function App() {
  const [filter, setFilter] = useState('all');
  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <Menu />
      {data.map((item) => {
        return <Item key={item.id} category={item.category} data={item} />;
      })}
    </Fragment>
  );
}

export default App;
