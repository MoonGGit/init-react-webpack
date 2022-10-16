import { createRoot } from 'react-dom/client';

const App = () => {
	return <div>Hello World</div>;
};

const container = document.getElementById('root');
createRoot(container!).render(<App />);
