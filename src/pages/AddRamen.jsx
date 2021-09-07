import React from 'react';
import { Button, Div, Text } from 'atomize';
import { Formik } from 'formik';
import { gql, useMutation } from '@apollo/client';

import { FormInput } from '../components/form.input';

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

  const handleClick = ({
    author,
    category,
    description,
    image,
    slug,
    title,
  }) => {
    addBowl({
      variables: {
        author,
        category,
        description,
        image,
        rating: 0,
        slug,
        title,
      },
    });
  };

  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        category: '',
        author: '',
        image: '',
        slug: '',
      }}
      validate={(values) => {
        // const errors = {};
        // if (!values.email) {
        //   errors.email = 'Required';
        // } else if (
        //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        // ) {
        //   errors.email = 'Invalid email address';
        // }
        // return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <Div d="flex" flexDir="column">
            <FormInput
              name="title"
              placeholder="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              required={true}
            />
            {errors.title && touched.title && <Text>{errors.title}</Text>}
            <FormInput
              name="description"
              placeholder="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            <FormInput
              name="category"
              placeholder="category"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.category}
            />
            <FormInput
              name="author"
              placeholder="author"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.author}
            />
            <FormInput
              name="image"
              placeholder="image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
            />
            <FormInput
              name="slug"
              placeholder="slug"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.slug}
            />

            <Button
              type="submit"
              h="3rem"
              p={{ x: '1.25rem' }}
              textSize="body"
              textColor="white"
              bg="salmonPink"
              m={{ t: '5px' }}
              shadow="2"
              hoverShadow="3"
              onClick={() => handleClick(values)}
              disabled={isSubmitting}
            >
              add ramen!
            </Button>
          </Div>
        </form>
      )}
    </Formik>
  );
}
