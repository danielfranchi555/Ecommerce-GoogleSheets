import React, { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import Papa from 'papaparse'
import { Nav } from '../Nav/Nav'
import { Button, Card, CardBody, Container, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { Cart } from '../Cart/Cart'
import { Count } from '../Count/Count'
import { NavBar } from '../NavBar-2/NavBar'
import { CartDos } from '../Cart-dos/CartDos'



export const ItemListContainer = () => {
    
  const [info,setInfo] = useState([])
  const [loading,setLoading] = useState(true)
  const {category} = useParams()

    const getData =  async ()=>{
     const data = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vS2rq9FCC26h5MbQGuuG4acC_jcCx3-kEmazBj9tkDTxISiGpn10eCJhvE3U0dWDVLf0QX8fqD1VBXt/pub?gid=0&single=true&output=csv')
     const resp = await data.text()
     const parsed = await new Promise((resolve, reject) => {
      Papa.parse(resp,{header:true,complete : resolve,error:reject})
     })
     setInfo(parsed.data)
     setLoading(false)
    }
  
    useEffect(()=>{

     getData()
    },[category])

     const dataFilter = info.filter (prod => prod.categorie === category )
  

 const hola = 'hola'

  return (


    <>
     
      

     {loading? 
       <p>lOADING</p>
       :  
       <div className='products'>
     
    

   
  
       <div className='sideBar'>
         <Nav  />
       </div>
       <div className='navBar'>
     <NavBar/>
     </div>
       <div className='cart'>
         <Cart/>
       </div>
       <div className='cartDos'>
         <CartDos/>
       </div>
       <SimpleGrid gap={2} h='100vh' minChildWidth={{base:'160px',md:'170px'}}>
                {
             category? dataFilter.map((item)=>(
               <Stack   boxShadow='xl' p='0'   w='180px'   h='350px' >
               <Stack p={1}  w='auto' h='100%'  borderRadius='10px' flex={1}  justifyContent='center'   alignItems='center' >
                 <Image
                   src={item.image}
                   alt='Green double couch with wooden legs'
                   borderRadius='lg'
                   boxSize='cover'
                   flex={1}
                 />
                 <Stack flex={1}  align='center'  w='100%'   >
                   <Heading  textAlign='center' size='xs'>{item.title}</Heading>
                   <Text flex={1}>
                    {item.marca}
                   </Text>
                   <Text flex={1} color='blue.600' fontSize='1xl'>
                     ${item.price}
                   </Text>
                   <Stack flex={1} w='100%'>
                 <Count item={item} />
                 </Stack>
                 </Stack>
                 
        
               </Stack>
              
             </Stack>
             )):
           info.map((item)=>(
        <Stack  boxShadow='xl' p='0' rounded='md'   w='180px'   h='100%' >
        <Stack  p={2} w={{base:'180px',md:'auto'}}  border='solid 1px white' borderRadius='10px'  flex={1}  justifyContent='center' align='center'   alignItems='center' >
          <Image
            src={item.image}
            alt='Green double couch with wooden legs'
            borderRadius='xs'
            boxSize='cover'
            flex={1}
           
          />
          <Stack   align='center'  w='100%'   >
            <Heading  textAlign='center' size='xs'>{item.title}</Heading>
            <Text fontSize={13} flex={1}>
             {item.marca}
            </Text>
            <Text flex={1} color='blue.600' fontSize='1xl'>
              ${item.price}
            </Text>
            <Stack flex={1} w='100%'>
          <Count item={item} />
          </Stack>
          </Stack>
          
 
        </Stack>
       
      </Stack>
      
       ))}
      
      
     </SimpleGrid>
 
       </div>
      }

   
    
    
     </>  )
}
