import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  WriterWrapper,
  WriterTitle,
  WriterInfoSwitch,
  WriterItem,
} from "../style";

class Writer extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <WriterWrapper>
        <WriterTitle>
          Golden Author
          <WriterInfoSwitch>
            <span
              ref={(icon) => {
                this.spinIcon = icon;
              }}
              className="iconfont spin"
            >
              &#xe72b;
            </span>
            see next
          </WriterInfoSwitch>
        </WriterTitle>
        {list.map((item) => (
          <WriterItem key={item.get("id")}>
            <a href="">
              <img className="avatar" src={item.get("imgUrl")} alt="" />
            </a>
            <p>
              write{item.get("numOfWords")}words . {item.get("numOfLikes")}k
              likes
            </p>
            <div className="name">{item.get("name")}</div>
          </WriterItem>
        ))}
      </WriterWrapper>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(["home", "writerList"]),
});

export default connect(mapState, null)(Writer);
