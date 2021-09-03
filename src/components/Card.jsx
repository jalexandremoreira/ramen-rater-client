import React from 'react';
import { Div } from 'atomize';

import RamenImage from '../images/regular-ramen.jpg';

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
      onClick={() => console.log('click my card!')}
    >
      <Div>
        <Div
          m={{ t: '-30px' }}
          shadow="3"
          rounded="circle"
          bgImg={RamenImage}
          bgSize="cover"
          flex="1"
          h="180px"
          w="180px"
          bgPos="center"
        />
      </Div>
    </Div>
  );
}
