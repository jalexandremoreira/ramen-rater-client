import React from 'react';
// Creating a div
import { Div, Text } from 'atomize';

export function Home() {
  return (
    <Div
      bg="apricot"
      d="flex"
      align="center"
      p="1rem"
      flex="1"
      flexDir="column"
    >
      <Text
        tag="h1"
        textSize="display3"
        textColor="primaryText"
        m={{ t: '20rem' }}
      >
        ramen!
      </Text>

      <Text
        textSize="subheader"
        textColor="secondaryText"
        m={{ b: '4rem', t: '1rem' }}
      >
        a place to find the best ramen bowls
      </Text>
    </Div>
  );
}
