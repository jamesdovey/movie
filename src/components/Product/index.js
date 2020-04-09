import React from "react";
import { Flex, Image, Text } from "@chakra-ui/core";

const Product = ({ title, image }) => (
  <Flex>
    <Image src={image} width={300} />
    <Text>{title}</Text>
  </Flex>
);

export default Product;
