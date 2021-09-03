import React from 'react';
import { Div, Text } from 'atomize';
import { useHistory, useLocation } from 'react-router-dom';

import Logo from '../images/ramen-rater-logo1.png';

export function Navbar() {
  const history = useHistory();
  const location = useLocation();

  console.log('location', location);
  const LinkText = ({ children, onClick }) => {
    return (
      <Text cursor="pointer" textColor="primaryText" onClick={onClick}>
        {children}
      </Text>
    );
  };

  return (
    <Div
      bg="melon"
      d="flex"
      align="center"
      flex="1"
      flexDir="row"
      h="5em"
      justify="space-between"
      p={{ l: '10%', r: '10%' }}
    >
      <Div
        cursor="pointer"
        onClick={() => history.push('/')}
        bgImg={Logo}
        bgSize="cover"
        w="150px"
        bgPos="center"
        h="80%"
      />

      <LinkText onClick={() => history.push('/')}>home</LinkText>
      <LinkText onClick={() => history.push('/add-ramen')}>add ramen</LinkText>
      <LinkText>random ramen</LinkText>
    </Div>
  );
}
