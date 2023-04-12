import { useToast } from "@chakra-ui/react";
import React, { createContext, useContext, useState } from "react";
export const ContextShop = createContext();
export const UseContextShop = () => useContext(ContextShop);

export const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  const toast = useToast();

  const addToCart = (prod) => {
    const idx = cart.findIndex((producto) => producto.id === prod.id);
    if (idx != -1) {
      cart[idx].quantity = cart[idx].quantity + prod.quantity;
      setCart([...cart]);
      toast({
        title: "Producto Agregado.",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
    } else {
      console.log(idx);
      setCart(cart.concat(prod));
      toast({
        title: "Producto Agregado.",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
    }
  };

  const quantityTotal = () => {
    const total = cart.reduce(
      (acc, producto) => (acc = acc + producto.quantity),
      0
    );
    return total;
  };

  const deleteProduct = (id) => {
    const productsDelete = cart.filter((prod) => prod.id != id);
    setCart(productsDelete);
  };

  const totalPrice = () => {
    const total = cart.reduce((acc, prod) => (acc = acc + prod.price), 0);
    return total;
  };

  const Total = () => {
    const total = cart.reduce(
      (acc, prod) => (acc = acc + prod.quantity * parseInt(prod.price)),
      0
    );
    return total;
  };

  console.log(cart);

  return (
    <ContextShop.Provider
      value={{
        addToCart,
        cart,
        deleteProduct,
        quantityTotal,
        totalPrice,
        Total,
      }}
    >
      {children}
    </ContextShop.Provider>
  );
};
