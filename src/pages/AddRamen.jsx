import React from 'react';
import { Button, Div } from 'atomize';
import { gql, useMutation } from '@apollo/client';

const ADD_BOWL_MUTATION = gql`
  mutation (
    $author: String!
    $category: String!
    $description: String!
    $image: String!
    $rating: Int!
    $slug: String!
    $title: String!
  ) {
    addBowl(
      author: $author
      category: $category
      description: $description
      image: $image
      rating: $rating
      slug: $slug
      title: $title
    ) {
      id
    }
  }
`;

export function AddRamen() {
  const [addBowl] = useMutation(ADD_BOWL_MUTATION);

  const handleClick = () => {
    addBowl({
      variables: {
        author: 'Alex',
        category: '1',
        description: 'Just good ramen!',
        image:
          'https://images.pexels.com/photos/1395319/pexels-photo-1395319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        rating: 0,
        slug: 'good-ramen',
        title: 'This is really good ramen',
      },
    });
  };

  return (
    <Div>
      <Button
        h="3rem"
        p={{ x: '1.25rem' }}
        textSize="body"
        textColor="white"
        bg="salmonPink"
        m={{ r: '0.5rem' }}
        shadow="2"
        hoverShadow="3"
        onClick={() => handleClick()}
      >
        add ramen
      </Button>
    </Div>
  );
}
