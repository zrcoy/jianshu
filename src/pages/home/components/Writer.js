import React ,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  WriterWrapper,
  WriterTitle,
  WriterInfoSwitch,
  WriterItem
} from '../style';

class Writer extends PureComponent{

  render(){
    const { list } = this.props;
    return(
      <WriterWrapper>
        <WriterTitle>
          推荐作者
          <WriterInfoSwitch>
            <span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe72b;</span>
            换一批
          </WriterInfoSwitch>
        </WriterTitle>
        {
          list.map((item)=>(
            <WriterItem key={item.get('id')}>
              <a href="">
                <img 
                  className = "avatar"
                  src = {item.get('imgUrl')}
                  alt=''
                />
              </a>
              <p>写了{item.get('numOfWords')}字 . {item.get('numOfLikes')}k喜欢</p>
              <div className="name">{item.get('name')}</div>
            </WriterItem>
          ))
        }

      </WriterWrapper>
    )
  }

}

const mapState = (state) => ({
  list: state.getIn(['home','writerList'])
});

export default connect(mapState, null)(Writer);