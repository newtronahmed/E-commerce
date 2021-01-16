// import logo from './logo.svg';
// import "tailwindcss/tailwind.css"
import './styles/main.css';
// import TextField from '@material-ui/core/TextField'
import {Products, Navbar, Cart ,Checkout} from './components'
import {Provider} from 'react-redux'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import store from './store'
// import {Products,Navbar} from ''
function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <Navbar />
        <Route exact path='/'  component={Products}/>
        <Route path='/cart' component={Cart} />
        <Route path='/checkout' component={Checkout} />
      </div>
    </Router>
    </Provider>
  );
}

export default App;
