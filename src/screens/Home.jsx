import React from 'react';
import { Button, Icon, Div, Text } from 'atomize';
import { useQuery, gql } from '@apollo/client';

import { Card } from '../components/Card';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel purus vitae turpis consequat congue. Duis placerat iaculis mi et placerat. Nunc blandit pretium nibh ac condimentum. Quisque faucibus imperdiet libero quis suscipit.';

export function Home() {
  const { data, loading, error } = useQuery(gql`
    query {
      bowls {
        title
        image
        description
      }
    }
  `);

  if (!data) return <Text>No data...</Text>;
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;

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
          {/* <Div bgImg={Logo} bgSize="cover" w="280px" bgPos="center" h="120px" /> */}

          <Text textColor="primaryText" textSize="heading">
            ramen of the week
          </Text>
          <Div h="2px" w="40%" bg="melon" />

          <Text textColor="primaryText" textSize="display3">
            vegan tonkotsu ramen
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
            bg="salmonPink"
            m={{ r: '1rem' }}
            w="50%"
          >
            view details
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

      <Div d="flex" flexDir="row" justify="space-between" flexWrap="wrap">
        {data?.bowls.map((item, index) => (
          <Div d="flex" align="center" justify="center" w="33%" key={index}>
            <Card
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </Div>
        ))}

        <Div flexGrow="1" />
      </Div>
    </Div>
  );
}
