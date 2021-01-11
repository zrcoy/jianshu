import React , {Component} from 'react';
import { GlobalStyle } from './style';
import { GlobalStyleFont } from './statics/iconfont/iconfont';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store';

class App extends Component{
  render(){
    return(
      <div>
        <Provider store = {store}>
          <GlobalStyle />
          <GlobalStyleFont />
          <Header />
          <BrowserRouter>
            <div>
              <Route path = '/' exact component={Home}></Route>
              <Route path = '/detail' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}

export default App;
