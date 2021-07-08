import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import MyRoutes from './routes';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Header />
				<MyRoutes />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
