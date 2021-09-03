import React from 'react';
import { Div, Text } from 'atomize';

export function Card() {
  const description =
    'tasty vegan ramen made with the best ingredients and with a deep umami punch, and a hint of spiciness!';
  return (
    <Div
      align="center"
      d="flex"
      justify="flex-start"
      bg="melon"
      h="420px"
      w="280px"
      rounded="xl"
      shadow="3"
      hoverShadow="4"
      cursor="pointer"
      onClick={() => console.log('click my card!')}
      flexDir="Column"
      transition="200ms"
      m={{ b: '2em', t: '2em' }}
    >
      <Div
        m={{ t: '-40px' }}
        shadow="3"
        rounded="circle"
        bgImg="https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
        bgSize="cover"
        flex="1"
        h="185px"
        w="185px"
        bgPos="center"
      />

      <Text
        m={{ l: '25px', r: '25px' }}
        textColor="primaryText"
        textSize="heading"
        textWeight={700}
      >
        vegan tonkotsu ramen
      </Text>
      <Div h="2px" w="85%" bg="teaGreen" />

      <Text
        m={{ l: '25px', r: '25px' }}
        textColor="secondaryText"
        textSize="paragraph"
      >
        {description}
      </Text>
    </Div>
  );
}
