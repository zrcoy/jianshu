import React , {Component} from 'react';
import Header from './common/header';
import { GlobalStyle } from './style';
import { GlobalStyleFont } from './statics/iconfont/iconfont';

class App extends Component{
  render(){
    return(
      <div>
        <GlobalStyle />
        <GlobalStyleFont />
        <Header />
      </div>
    )
  }
}

export default App;
