import React from 'react';
import { Div } from 'atomize';

export function Card() {
  return (
    <Div
      d="flex"
      justify="center"
      bg="melon"
      h="350px"
      w="250px"
      rounded="xl"
      shadow="3"
      cursor="pointer"
      onClick={() => console.log('click my card!')}
    >
      <Div
        m={{ t: '-30px' }}
        shadow="3"
        rounded="circle"
        bgImg="https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
        bgSize="cover"
        flex="1"
        h="180px"
        w="180px"
        bgPos="center"
      />
    </Div>
  );
}
