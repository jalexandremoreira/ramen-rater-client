import React from 'react';
import { Button, Icon, Div, Text } from 'atomize';

import { Card } from '../components/Card';
import Logo from '../images/ramen-rater-logo1.png';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel purus vitae turpis consequat congue. Duis placerat iaculis mi et placerat. Nunc blandit pretium nibh ac condimentum. Quisque faucibus imperdiet libero quis suscipit.';

export function Home() {
  return (
    <Div d="flex" flexDir="column">
      <Div
        d="flex"
        // align="center"
        p={{ t: '5em' }}
        flex="1"
        flexDir="row"
        justify="space-between"
      >
        <Div d="flex" flexDir="column" w="45%">
          <Div bgImg={Logo} bgSize="cover" w="280px" bgPos="center" h="120px" />

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
          bgImg="https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
          bgSize="cover"
          flex="1"
          w="45%"
          bgPos="center"
          h="25rem"
          shadow="3"
        />
      </Div>

      <Div
        w="100%"
        h="2px"
        bg="melon"
        rounded="xl"
        m={{ b: '4em', t: '4em' }}
      />

      <Div m={{ b: '2em', t: '3em' }}>
        <Card />
      </Div>
    </Div>
  );
}
