//import './App.css';
import './styles/css/all.min.css';
import { Provider } from "react-redux";
import './styles/css/site.css';
import Form from './components/formUserFinder';
import { store } from "./actions/store";


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Form />
    </div>
    </Provider>
  );
}

export default App;