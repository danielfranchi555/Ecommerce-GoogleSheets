import React from "react";
import carrito from "../../img/carrito.png";
import {
  Stack,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Button,
  Text,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Image,
  Link,
  HStack,
} from "@chakra-ui/react";
import { UseContextShop } from "../Context/Context";

export const CartDos = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { cart, quantityTotal, deleteProduct, Total } = UseContextShop();

  const subtTotal = (price, quantity) => {
    return price * quantity;
  };

  const text = cart.reduce((mess, prod) => mess.concat(`Producto: ${prod.title} - cantidad: ${prod.quantity}\n`),"");
  const PagoTerminado = text.concat(`Precio Total :$${Total()}`);




  return (
    <Stack
      onClick={onOpen}
      align="flex-end"
      className="fixed-bottom mb-1 container-lg"
    >
      <HStack>
        <Button onClick={onOpen} colorScheme="teal" w="130px">
          {quantityTotal()}
          <Image
            boxSize="40px"
            objectFit="cover"
            src={carrito}
            alt="Dan Abramov"
          />
        </Button>
      </HStack>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="xl"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Carrito</DrawerHeader>

          <DrawerBody overflowY="scroll">
            {cart.length === 0 ? (
              <Text textAlign="center" color="red">
                No hay productos en el carrito
              </Text>
            ) : (
              <TableContainer maxW="auto">
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Eliminar</Th>
                      <Th>Producto</Th>
                      <Th>Titulo</Th>
                      <Th>Cantidad</Th>
                      <Th>Subtotal</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {cart.map((item) => (
                      <Tr>
                        <Td>
                          <Button
                            colorScheme="red"
                            onClick={() => deleteProduct(item.id)}
                            variant="outline"
                          >
                            {" "}
                            x
                          </Button>{" "}
                        </Td>

                        <Td>
                          <Image boxSize="50px" src={item.image} />{" "}
                        </Td>
                        <Td>{item.title}</Td>
                        <Td>{item.quantity}</Td>
                        <Td>
                          {" "}
                          ${subtTotal(parseInt(item.price), item.quantity)}{" "}
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            )}
          </DrawerBody>

          <Stack direction="row" justifyContent="flex-end">
            <Stack direction="row">
              <Text px={1} fontSize={20}>
                Precio Total : ${" "}
                <span style={{ fontWeight: "700" }}> {Total()} </span>{" "}
              </Text>
              <Button
                variant="outline"
                colorScheme="red"
                mr={3}
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                as={Link}
                href={`https://wa.me/541111111111?text=${encodeURIComponent(PagoTerminado)}`}
                colorScheme="blue"
              >
                Terminar Compra
              </Button>
            </Stack>
          </Stack>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
};
