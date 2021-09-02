import React from 'react';
import { Button, Icon, Div, Text } from 'atomize';

import RamenImage from '../images/regular-ramen.jpg';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel purus vitae turpis consequat congue. Duis placerat iaculis mi et placerat. Nunc blandit pretium nibh ac condimentum. Quisque faucibus imperdiet libero quis suscipit.';

export function Home() {
  return (
    <Div
      d="flex"
      // align="center"
      p={{ t: '5em' }}
      flex="1"
      flexDir="row"
      justify="space-between"
    >
      <Div d="flex" flexDir="column" w="45%">
        <Text tag="h1" textSize="display3" textColor="primaryText">
          ramen!
        </Text>

        <Text
          textSize="subheader"
          textColor="secondaryText"
          m={{ b: '4rem', t: '1rem' }}
        >
          {lorem.toLowerCase()}
        </Text>

        <Button
          suffix={
            <Icon
              name="LongRight"
              size="16px"
              color="white"
              m={{ l: '1rem' }}
            />
          }
          shadow="3"
          hoverShadow="4"
          m={{ r: '1rem' }}
          w="50%"
        >
          explore
        </Button>
      </Div>
      <Div
        rounded="xl"
        bgImg={RamenImage}
        bgSize="cover"
        flex="1"
        w="45%"
        bgPos="center"
        h="25rem"
        shadow="3"
      />
    </Div>
  );
}
