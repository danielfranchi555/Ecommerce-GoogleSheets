import { Button, Stack, Text } from '@chakra-ui/react'
import { UseContextShop } from '../Context/Context'
import React, { useState } from 'react'

export const Count = ({item}) => {
   const [count,setCount] = useState(1)
   const stock = 5 

   const{addToCart}= UseContextShop()

   const increment = ()=>{
    count < stock && setCount(count + 1)
    
   }
 
   const decrement = ()=>{
       count > 1 && setCount(count -1)
   }

  return (
    <Stack  direction='row' justify='center' w='100%'  align='center'>
         <Button  onClick={()=>addToCart({...item,quantity:count})} size='sm'  colorScheme='blue' >Comprar</Button>
         <Stack direction='row'>
           <Button size='sm' colorScheme='green'  onClick={()=>increment()}>+</Button>
           <Text>{count}</Text>
        <Button size='sm' colorScheme='green' onClick={()=>decrement()} >-</Button>
         </Stack>
       
    </Stack>
  )
}
