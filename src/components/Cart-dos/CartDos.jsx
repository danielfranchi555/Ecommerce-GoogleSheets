import React from 'react'
import carrito from '../../img/carrito.png'
import {Stack,Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure, Button, Text, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Image,} from '@chakra-ui/react'
import { UseContextShop } from '../Context/Context'
export const CartDos = () => {
  const { isOpen, onOpen, onClose, } = useDisclosure()
  const btnRef = React.useRef()
  const {cart,quantityTotal,deleteProduct,Total}=UseContextShop()
  const subtTotal = (price,quantity)=>{
    return    price * quantity
    }

  return (
    <Stack onClick={onOpen}   className='fixed-bottom mb-1 container-lg'>
                   <Button bg='teal' size='10px' w='150px' onClick={onOpen}>
                    <Stack align='center' direction='row'>
                     <img src={carrito}  width='30px' alt="" />
       <Text textAlign='center'>{quantityTotal()}</Text> 
                    </Stack>
       
    </Button>
        <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        size='xl'
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Carrito</DrawerHeader>

          <DrawerBody overflowY='scroll'>
          {cart.length === 0  ?
     
     <Text textAlign='center' color='red'>No hay productos en el carrito</Text>
     : 
     <TableContainer maxW='auto'>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Eliminar</Th>
        <Th>Producto</Th>
        <Th>Titulo</Th>
        <Th >Cantidad</Th>
        <Th >Subtotal</Th>
      </Tr>
    </Thead>
    <Tbody>
      {cart.map((item)=>(
          <Tr>
        <Td><Button colorScheme='red' onClick={()=>deleteProduct(item.id)} variant='outline'> x</Button> </Td>

        <Td><Image boxSize='70px' src={item.image}/> </Td>
        <Td>{item.title}</Td>
        <Td>{item.quantity}</Td>
        <Td> ${subtTotal(parseInt(item.price), item.quantity)} </Td>
      </Tr>
      ))}
    </Tbody>
  </Table>
</TableContainer>
    }
          
          </DrawerBody>

          <DrawerFooter>
            <Text px={2} fontSize={20}>Precio Total : $ <span style={{fontWeight:'700'}}> {Total()} </span>  </Text>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Terminar Compra</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Stack>
  )
}
