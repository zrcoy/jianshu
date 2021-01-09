import React , {Component} from 'react';
import Header from './common/header';
import { GlobalStyle } from './style';
import { GlobalStyleFont } from './statics/iconfont/iconfont';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component{
  render(){
    return(
      <div>
        <Provider store = {store}>
          <GlobalStyle />
          <GlobalStyleFont />
          <Header />
        </Provider>
      </div>
    )
  }
}

export default App;
