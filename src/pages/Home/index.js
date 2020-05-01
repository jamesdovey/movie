import React from "react";

import {
  Heading,
  Flex,
  Input,
  InputGroup,
  Icon,
  InputRightElement
} from "@chakra-ui/core";

const Home = () => {
  return (
    <Flex justify="center" align="center" direction="column">
      <Flex width="60%" justify="center" align="center" direction="column">
        <Heading textAlign="center">Movie Search</Heading>
        <InputGroup width="50%">
          <Input placeholder="Search" size="lg" />
          <InputRightElement children={<Icon name="search" color="black" />} />
        </InputGroup>
      </Flex>
    </Flex>
  );
};

export default Home;
