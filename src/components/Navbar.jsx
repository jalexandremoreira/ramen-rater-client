import React from 'react';
import { Div, Text } from 'atomize';
import { useHistory, useLocation } from 'react-router-dom';

import Logo from '../images/ramen-rater-logo1.png';

export function Navbar() {
  const [selected, setSelected] = React.useState(1);
  const history = useHistory();
  const { pathname } = useLocation();

  React.useEffect(() => {
    switch (pathname) {
      case '/home':
        return setSelected(1);
      case '/add-ramen':
        return setSelected(2);

      default:
        return setSelected(1);
    }
  }, [pathname]);

  const LinkText = ({ children, onClick, linkId }) => {
    return (
      <Div
        transition="300ms"
        h="100%"
        d="flex"
        align="center"
        justify="center"
        p={{ l: '10px', r: '10px' }}
        cursor="pointer"
        hoverBg="melonLight"
        hoverTextColor="secondaryText"
        onClick={onClick}
        textColor="primaryText"
        flexDir="column"
      >
        <Text textSize="title">{children}</Text>
        <Div
          p={{ t: '4px' }}
          h="2px"
          w="40px"
          bg={linkId === selected ? 'lightCoral' : 'transparent'}
        />
      </Div>
    );
  };

  return (
    <Div bg="melon" d="flex" align="center" flex="1" h="5em" justify="center">
      <Div
        d="flex"
        align="center"
        flex="1"
        flexDir="row"
        h="100%"
        w="100%"
        justify="space-between"
        p={{ l: '10%', r: '10%' }}
        m="auto"
        maxW="1920px"
      >
        <Div
          id="logo"
          cursor="pointer"
          onClick={() => history.push('/')}
          bgImg={Logo}
          bgSize="cover"
          w="150px"
          bgPos="center"
          h="80%"
        />

        <Div w="40%" h="100%" d="flex" flexDir="row" m={{ l: '2em' }}>
          <LinkText linkId={1} onClick={() => history.push('/')}>
            home
          </LinkText>
          <LinkText linkId={2} onClick={() => history.push('/add-ramen')}>
            add ramen
          </LinkText>
        </Div>

        <Div flexGrow="1" />

        <Div
          w="40%"
          h="100%"
          d="flex"
          flexDir="row"
          m={{ l: '2em' }}
          justify="flex-end"
        >
          <LinkText onClick={() => history.push('#sign-out')}>
            sign out
          </LinkText>
          <LinkText onClick={() => history.push('#contact')}>contact</LinkText>
        </Div>
      </Div>
    </Div>
  );
}
