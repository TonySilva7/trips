import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import Header from './components/Header';
import MyRoutes from './routes';
import history from './services/history';
import store from './store';

function App () {
  return (
    <Provider store={ store }>
      <Router history={ history }>
        <Header/>
        <MyRoutes/>
      </Router>
    </Provider>
  );
}

export default App;
