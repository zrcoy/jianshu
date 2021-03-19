import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { actionCreators } from "./store";
import { LoginBox, LoginWrapper, Input, Button } from "./style";

class Login extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="Username"
              ref={(input) => {
                this.account = input;
              }}
            />
            <Input
              placeholder="password"
              type="password"
              ref={(input) => {
                this.password = input;
              }}
            />
            <Button
              onClick={() => this.props.login(this.account, this.password)}
            >
              Login
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(["login", "login"]),
});

const mapDispatch = (dispatch) => ({
  login(accountElem, passwordElem) {
    dispatch(actionCreators.login(accountElem.value, passwordElem.value));
  },
});

export default connect(mapState, mapDispatch)(Login);
