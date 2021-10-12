import React from 'react';
import { useParams } from 'react-router-dom';
import { Div, Text } from 'atomize';
import { gql, useQuery } from '@apollo/client';

const BOWL_QUERY = gql`
  query ($slug: String!) {
    bowl(slug: $slug) {
      author
      image
      description
      title
      rating
    }
  }
`;

export function RamenDetails() {
  const { slug } = useParams();

  const { data, loading, error } = useQuery(BOWL_QUERY, {
    variables: {
      slug,
    },
  });

  console.log(data);

  if (!data) return <Text>No data...</Text>;
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>error</Text>;

  const { author, rating, title, image, description } = data?.bowl;

  return (
    <Div d="flex" p={{ t: '5em' }} flex="1" flexDir="column">
      <Text textColor="primaryText" textSize="heading">
        author&nbsp;{author}
      </Text>
      <Text textColor="primaryText" textSize="heading">
        rating&nbsp;{rating}
      </Text>
      <Text textColor="primaryText" textSize="heading">
        title&nbsp;{title}
      </Text>
      <Text textColor="primaryText" textSize="heading">
        description&nbsp;{description}
      </Text>
      <Div
        rounded="xl"
        bgImg={image}
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
