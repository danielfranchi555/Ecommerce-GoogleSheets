import {
  Card,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Count } from "../Count/Count";

export const Item = ({ item }) => {
  return (
    <Card w="auto">
      <Stack p={3}>
        <Image
          src={item.image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack p={2} align="center" h="210px" w="170px" mt="6" spacing="1">
          <Heading flex={1} textAlign="center" fontSize="12px">
            {item.title}
          </Heading>
          <Text w="100%" textAlign="center" flex={1}>
            {item.marca}
          </Text>
          <Text
            w="100%"
            textAlign="center"
            flex={1}
            color="blue.600"
            fontSize="1xl"
          >
            ${item.price}
          </Text>
          <Count item={item} />
        </Stack>
      </Stack>
    </Card>
  );
};
