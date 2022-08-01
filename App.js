import logo from './logo.svg';
import './App.css';
//import { Signin } from './srevices/UserService';
//import TakeNoteOne from './component/takenote-one/TakeNote-One';
//import TakeNoteOne from './component/takenote-one/TakeNote-One';
import Signin from './pages/Signin/Signin';
import SignUp from './pages/login/signup';
//import Header from './component/header/Header';
//import TakeNoteTwo from '/takenotetwo/TakeNote-Two'
//import TakeNoteTwo from './component/takenote-two/TakeNote-Two';
//import TakeNoteThree from './component/takenote-three/TakeNote-Three';
import Dashbord from './component/dashbord/Dashbord'
import Routers from './component/router/router';
import { Provider } from 'react-redux';
import store from './component/redux/store'


function App() {
  return (
    <div>
      <Provider store={store}>
      <Routers/>
      </Provider>
    </div>
  );
}

export default App;
