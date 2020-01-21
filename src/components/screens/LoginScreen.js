import React, { Component } from 'react';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';
import { sanitizePin, validatePin } from '../../helpers/ValidationHelper';
import Button from '../atoms/Button';
import Heading from '../atoms/Heading/Heading';
// import Input from '../atoms/Input';
import Text from '../atoms/Text';
import ScreenWrapper from '../molecules/ScreenWrapper';
import withAuthentication from '../organisms/withAuthentication';

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideLogo: false,
      validPin: false,
      personalNumberInput: '',
    };
  }

  componentDidMount() {
    // this.keyboardWillShowListener = Keyboard.addListener(
    //   'keyboardWillShow',
    //   () => this.setState({ hideLogo: true }),
    // );
    // this.keyboardWillHideListener = Keyboard.addListener(
    //   'keyboardWillHide',
    //   () => this.setState({ hideLogo: false }),
    // );
  }

  componentWillUnmount() {
    // this.keyboardWillShowListener.remove();
    // this.keyboardWillHideListener.remove();
  }

  changeHandler = event => {
    this.setState({
      personalNumberInput: sanitizePin(event.target.value),
      validPin: validatePin(event.target.value),
    });
  };

  submitHandler = () => {
    const { personalNumberInput } = this.state;

    if (personalNumberInput.length <= 0) {
      return;
    }

    if (!validatePin(personalNumberInput)) {
      alert('Felaktigt personnummer. Ange format ÅÅÅÅMMDDXXXX.');
      return;
    }

    this.authenticateUser(personalNumberInput);
  };

  /**
   * Authenticate user and navigate on success
   */
  authenticateUser = async personalNumber => {
    try {
      const { loginUser } = this.props.authentication;
      await loginUser(personalNumber);
      // TODO: Fix navigationafter login
      // this.props.navigation.navigate('Chat');
      alert('Login was successful');
    } catch (e) {
      if (e.message !== 'cancelled') {
        console.info('Error in LoginScreen::authenticateUser', e.message);
      }
    }
  };

  render() {
    const { validPin, personalNumberInput, hideLogo } = this.state;
    const {
      isLoading,
      cancelLogin,
      resetUser,
      user,
      isBankidInstalled,
    } = this.props.authentication;

    if (isLoading) {
      return (
        <LoginScreenWrapper>
          <p>(show spinner here)</p>
          {isMobile ? (
            <p>Söker efter BankID säkerhetsprogram</p>
          ) : (
            <p>Väntar på att BankID ska startas på en annan enhet</p>
          )}

          <Button color="purple" block onClick={() => cancelLogin()}>
            <Text>Avbryt</Text>
          </Button>
        </LoginScreenWrapper>
      );
    }

    return (
      <LoginScreenWrapper>
        <LoginKeyboardAvoidingView behavior="padding" enabled>
          <LoginHeader>
            {/* TODO: Hack to import image because import crashes  */}
            <Logo src={require('../../assets/slides/stadsvapen.png')} alt="Logo" />
          </LoginHeader>
          <LoginBody>
            <LoginForm>
              <LoginFormHeader>
                <h2>Logga in</h2>
              </LoginFormHeader>

              <LoginFormField>
                <input
                  placeholder="ÅÅÅÅMMDDXXXX"
                  value={personalNumberInput}
                  onChange={this.changeHandler}
                  maxLength={12}
                />
              </LoginFormField>

              <LoginFormField>
                <Button type="button" color="purpleLight" onClick={this.submitHandler}>
                  <Text>Logga in med mobilt BankID</Text>
                </Button>
              </LoginFormField>

              <div>
                <Link
                  as="a"
                  href="https://support.bankid.com/sv/bankid/mobilt-bankid"
                  target="_blank"
                >
                  Läs mer om hur du skaffar mobilt BankID
                </Link>
              </div>
            </LoginForm>
          </LoginBody>
        </LoginKeyboardAvoidingView>
      </LoginScreenWrapper>
    );
  }
}

const Logo = styled.img`
  height: 200px;
  width: auto;
`;

const LoginScreenWrapper = styled(ScreenWrapper)`
  background-color: #f5f5f5;
`;

const Link = styled.button`
  text-decoration: underline;
  font-size: 16px;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 8px;
`;

const LoginKeyboardAvoidingView = styled.div`
  flex: 1;
  align-items: stretch;
`;

const LoginHeader = styled.div`
  text-align: center;
  flex: 1;
  justify-content: center;
`;

const LoginBody = styled.div`
  flex: 1;
  justify-content: flex-end;
`;

const LoginForm = styled.div`
  flex-grow: 0;
`;

const LoginFormField = styled.div`
  margin-bottom: 16px;
`;
const LoginFormHeader = styled.div`
  margin-bottom: 32px;
`;

export default withAuthentication(LoginScreen);
