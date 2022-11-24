import './App.css';
import Main from './component/Main';
import { store } from './features/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
    <div className="full">
      <Main />
    </div>
    </Provider>
  );
}

export default App;
