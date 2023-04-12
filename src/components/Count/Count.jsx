import { Button, Stack, Text } from "@chakra-ui/react";
import { UseContextShop } from "../Context/Context";
import React, { useState } from "react";

export const Count = ({ item }) => {
  const [count, setCount] = useState(1);
  const stock = 5;

  const { addToCart } = UseContextShop();

  const increment = () => {
    count < stock && setCount(count + 1);
  };

  const decrement = () => {
    count > 1 && setCount(count - 1);
  };

  return (
    <Stack
      flex={1}
      direction="column"
      justify="center"
      w="100%"
      h="100%"
      align="center"
    >
      <Button
        onClick={() => addToCart({ ...item, quantity: count })}
        size="md"
        variant="outline"
        colorScheme="green"
      >
        Comprar
      </Button>
      <Stack direction="row">
        <Button
          size="xs"
          colorScheme="green"
          variant="outline"
          onClick={() => decrement()}
        >
          -
        </Button>
        <Text>{count}</Text>
        <Button
          size="xs"
          colorScheme="green"
          variant="outline"
          onClick={() => increment()}
        >
          +
        </Button>
      </Stack>
    </Stack>
  );
};
