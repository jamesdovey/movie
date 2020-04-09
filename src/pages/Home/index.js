import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Heading, Flex } from "@chakra-ui/core";

import Product from "../../components/Product";

import { ALL_PRODUCTS } from "../../graphql/queries/products";

const Home = ({}) => {
  const { data, loading, error } = useQuery(ALL_PRODUCTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);
  return (
    <Flex>
      <Heading>Hello</Heading>
      <Flex direction="column">
        {data.allProduct.map((p, key) => (
          <Product
            key={key}
            title={p.title}
            image={p.defaultProductVariant.images[0].asset.url}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Home;
