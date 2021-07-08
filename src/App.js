import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import MyRoutes from './routes';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<MyRoutes />
		</BrowserRouter>
	);
}

export default App;
