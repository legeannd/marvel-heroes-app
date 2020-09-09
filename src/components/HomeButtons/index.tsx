import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { Container, RoundButton } from './styles';

import HeroIcon from '../../../assets/icons/Hero.svg';
import VillainIcon from '../../../assets/icons/Villain.svg';
import AntiheroIcon from '../../../assets/icons/Antihero.svg';
import AlienIcon from '../../../assets/icons/Alien.svg';
import HumanIcon from '../../../assets/icons/Human.svg';

const HomeButtons: React.FC = () => {
  return (
    <Container>
      <LinearGradient
        colors={['#005bea', '#00c6fb']}
        style={{
          width: 56,
          height: 56,
          borderRadius: 28,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <RoundButton>
          <HeroIcon width={32} height={32} />
        </RoundButton>
      </LinearGradient>
      <LinearGradient
        colors={['#ed1d24', '#ed1f69']}
        style={{
          width: 56,
          height: 56,
          borderRadius: 28,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <RoundButton>
          <VillainIcon width={32} height={32} />
        </RoundButton>
      </LinearGradient>
      <LinearGradient
        colors={['#b224ef', '#7579ff']}
        style={{
          width: 56,
          height: 56,
          borderRadius: 28,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <RoundButton>
          <AntiheroIcon width={32} height={32} />
        </RoundButton>
      </LinearGradient>
      <LinearGradient
        colors={['#0ba360', '#3cba92']}
        style={{
          width: 56,
          height: 56,
          borderRadius: 28,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <RoundButton>
          <AlienIcon width={32} height={32} />
        </RoundButton>
      </LinearGradient>
      <LinearGradient
        colors={['#ff7eb3', '#ff758c']}
        style={{
          width: 56,
          height: 56,
          borderRadius: 28,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <RoundButton>
          <HumanIcon width={32} height={32} />
        </RoundButton>
      </LinearGradient>
    </Container>
  );
};

export default HomeButtons;
