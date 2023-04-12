import {ChevronRightIcon,} from "@chakra-ui/icons";
import {  Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <Stack align="center" height="100%">
      <Text
        bg="green.600"
        w="100%"
        textAlign={{ base: "start", md: "center" }}
        px="2"
        color="white"
        fontSize={{ base: "15px", md: "20px" }}
      >
        Categories
      </Text>
      <Stack py="20px" px="2" gap={3}>
        <Link to={`/`}>
          <Stack direction="row">
            <Text flex={1} fontSize={14}>
              Todos
            </Text>
            <ChevronRightIcon boxSize={6} />
          </Stack>
        </Link>
        <Link size="md" to={`/category/${"lacteos"}`}>
          <Stack direction="row">
            <Text flex={1} fontSize={14}>
              Lacteos
            </Text>
            <ChevronRightIcon boxSize={6} />
          </Stack>
        </Link>

        <Link to={`/category/${"congelados"}`}>
          <Stack justify="center" direction="row">
            <Text flex={1} fontSize={13}>
              Congelados
            </Text>
            <ChevronRightIcon boxSize={6} />
          </Stack>
        </Link>
        <Link to={`/category/${"bebidas"}`}>
          <Stack direction="row">
            <Text flex={1} fontSize={14}>
              Bebidas
            </Text>
            <ChevronRightIcon boxSize={6} />
          </Stack>
        </Link>
        <Link to={`/category/${"limpieza"}`}>
          <Stack direction="row">
            <Text flex={1} fontSize={14}>
              Limpieza
            </Text>
            <ChevronRightIcon boxSize={6} />
          </Stack>
        </Link>
        <Link to={`/category/${"pastas"}`}>
          <Stack direction="row">
            <Text flex={1} fontSize={14}>
              Pastas
            </Text>
            <ChevronRightIcon boxSize={6} />
          </Stack>
        </Link>
      </Stack>
    </Stack>
  );
};
