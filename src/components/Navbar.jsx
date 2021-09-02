import React from 'react';
import { Div, Text } from 'atomize';

export function Navbar() {
  return (
    <Div
      bg="salmonPink"
      d="flex"
      align="center"
      flex="1"
      flexDir="row"
      h="5em"
      justify="space-between"
      p={{ l: '10%', r: '10%' }}
    >
      <Text tag="h1" textSize="display1" textColor="primaryText">
        ramen!
      </Text>
      <Text textColor="primaryText">home</Text>
      <Text textColor="primaryText">my ramen</Text>
      <Text textColor="primaryText">random ramen</Text>
    </Div>
  );
}
