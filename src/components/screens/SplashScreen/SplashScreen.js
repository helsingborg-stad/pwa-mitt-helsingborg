import React, { useState } from 'react';
// import AsyncStorage from '@react-native-community/async-storage';

import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';
import ScreenWrapper from '../../molecules/ScreenWrapper';
// import { SHOW_SPLASH_SCREEN } from '../../services/StorageService';

import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';
import Text from '../../atoms/Text';
import Icon from '../../atoms/Icon';

import HbgLogo from '../../../assets/slides/stadsvapen.png';
import ImageEasy from '../../../assets/slides/illu_001.png';
import ImageAccessible from '../../../assets/slides/illu_002.png';
import ImagePersonal from '../../../assets/slides/illu_003.png';

const FlexContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Swiper = styled(SwipeableViews)`
  background: #f5f5f5;
  flex-grow: 1;
`;

const SwipeButton = styled(Button)`
  background: transparent;
  border: none;
`;

const LoginButton = styled(Button)`
  border-color: #d35098;
  background: #d35098;
  color: #fff;
`;

const Slide = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TopBar = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: end;
`;

const Link = styled(Button)`
  background: transparent;
  border: 0;
  font-weight: bold;
  font-size: 14px;
  color: #707070;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SlideContent = styled.div`
  justify-self: center;
  padding: 24px;
`;

const Logo = styled.img`
  max-width: 120px;
  width: 100%;
`;

const SlideImage = styled.img`
  max-width: 250px;
  width: 100%;
`;

const Navigation = styled.div`
  height: 90px;
  background: #f5f5f5;
`;

const NavigationFlex = styled.div`
  padding: 0 24px 0 24px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 130px;
`;

const Dot = styled.div`
  border: 2px solid #610839;
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;

const ActiveDot = styled.div`
  background: #610839;
  border: 2px solid #610839;
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;

const LoginButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

/**
 * Splash screen that shall be displayed during first app initiation or after an app update.
 */
export default function SplashScreen(props) {
  const [swipeIndex, setSwipeIndex] = useState(0);

  /**
   * Set state disable for splash screen.
   */
  const disableSplash = () => {
    const { history } = props;
    history.push('/login');
  };

  const SlideWelcome = () => (
    <Slide>
      <TopBar>
        <Link onClick={() => disableSplash()} size="small" z={0}>
          Hoppa över
        </Link>
      </TopBar>
      <ImageContainer>
        <Logo src={HbgLogo} alt="Helsingborgs stad" />
      </ImageContainer>
      <SlideContent>
        <Heading type="h2">
          Mitt <br />
          Helsingborg
        </Heading>
        <Text>Välkommen!</Text>
      </SlideContent>
    </Slide>
  );

  const SlideEasy = () => (
    <Slide>
      <TopBar>
        <Link onClick={() => disableSplash()} size="small" z={0}>
          Hoppa över
        </Link>
      </TopBar>
      <ImageContainer>
        <SlideImage src={ImageEasy} alt="Easy" />
      </ImageContainer>
      <SlideContent>
        <Heading type="h2">Enkelt</Heading>
        <Text>
          Mitt Helsingborg är appen där du enkelt får tillgång till tjänster och information från
          kommunen.
        </Text>
      </SlideContent>
    </Slide>
  );

  const SlideAccessible = () => (
    <Slide>
      <TopBar>
        <Link onClick={() => disableSplash()} size="small" z={0}>
          Hoppa över
        </Link>
      </TopBar>
      <ImageContainer>
        <SlideImage src={ImageAccessible} alt="Accessible" />
      </ImageContainer>
      <SlideContent>
        <Heading type="h2">Nära</Heading>
        <Text>
          Du kan följa och hantera dina ärenden, få personlig service eller bli tipsad om saker som
          händer nära dig.
        </Text>
      </SlideContent>
    </Slide>
  );

  const SlidePersonal = () => (
    <Slide>
      <TopBar />
      <ImageContainer>
        <SlideImage src={ImagePersonal} alt="Personal" />
      </ImageContainer>
      <SlideContent>
        <Heading type="h2">Personligt</Heading>
        <Text>
          Inloggad ger mer. Som inloggad får du en personlig upplevelse anpassad för dig. <br />
          <br />
          Allt samlat i mobilen.
        </Text>
      </SlideContent>
      <LoginButtonContainer>
        <LoginButton color="purple" z={4} onClick={() => disableSplash()}>
          <Text>Logga in med Mobilt BankID</Text>
        </LoginButton>
      </LoginButtonContainer>
    </Slide>
  );

  /**
   * Render pagination dots
   */
  const renderDots = () => {
    const dots = [];
    for (let index = 0; index < 4; index++) {
      dots.push(index === swipeIndex ? <ActiveDot key={index} /> : <Dot key={index} />);
    }
    return dots;
  };

  return (
    <ScreenWrapper>
      <FlexContainer>
        <Swiper enableMouseEvents index={swipeIndex} onChangeIndex={i => setSwipeIndex(i)}>
          <SlideWelcome />
          <SlideEasy />
          <SlideAccessible />
          <SlidePersonal />
        </Swiper>
        {swipeIndex < 3 && (
          <Navigation value={swipeIndex}>
            <NavigationFlex>
              <DotsContainer>{renderDots()}</DotsContainer>
              <SwipeButton z={0} onClick={() => setSwipeIndex(swipeIndex + 1)}>
                <Text>{swipeIndex === 0 ? 'Kom igång' : 'Nästa'}</Text>
                <Icon size={16} name="chevron-right" color="purple" />
              </SwipeButton>
            </NavigationFlex>
          </Navigation>
        )}
      </FlexContainer>
    </ScreenWrapper>
  );
}
