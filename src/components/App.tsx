import * as React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';
import * as styles from './style.css';

const App = () => (
  <div className={styles.root}>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
