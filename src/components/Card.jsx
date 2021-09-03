import React from 'react';
import { Div, Text } from 'atomize';

export function Card({ image, title, description }) {
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
        border="6px solid"
        borderColor="lightCoral"
        shadow="3"
        rounded="circle"
        bgImg={image}
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
        textAlign="center"
      >
        {title.toLowerCase()}
      </Text>
      <Div h="2px" w="85%" bg="teaGreen" />

      <Text
        m={{ t: '18px' }}
        textColor="secondaryText"
        textSize="paragraph"
        textAlign="left"
        w="80%"
      >
        {description.toLowerCase()}
      </Text>
    </Div>
  );
}
