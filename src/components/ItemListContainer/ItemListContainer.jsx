import React, { useEffect, useState } from "react";
import "./ItemListContainer.scss";
import Papa from "papaparse";
import { Nav } from "../Nav/Nav";
import {
  Button,
  Card,
  CardBody,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Cart } from "../Cart/Cart";
import { Count } from "../Count/Count";
import { NavBar } from "../NavBar-2/NavBar";
import { CartDos } from "../Cart-dos/CartDos";
import { DotSpinner } from "@uiball/loaders";
import { Item } from "../Item/Item";

export const ItemListContainer = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  const getData = async () => {
    const data = await fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vS2rq9FCC26h5MbQGuuG4acC_jcCx3-kEmazBj9tkDTxISiGpn10eCJhvE3U0dWDVLf0QX8fqD1VBXt/pub?gid=0&single=true&output=csv"
    );
    const resp = await data.text();
    const parsed = await new Promise((resolve, reject) => {
      Papa.parse(resp, { header: true, complete: resolve, error: reject });
    });
    setInfo(parsed.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [category]);

  const dataFilter = info.filter((prod) => prod.categorie === category);

  return (
    <>
      {loading ? (
        <Stack justify="center" align="center" mt="100px">
          <DotSpinner size={40} speed={0.9} color="black" />
        </Stack>
      ) : (
        <div className="products">
          <div className="sideBar">
            <Nav />
          </div>
          <div className="navBar">
            <NavBar />
          </div>
          <div className="cart">
            <Cart />
          </div>
          <div className="cartDos">
            <CartDos />
          </div>
          <SimpleGrid
            gap={2}
            h="100vh"
            minChildWidth={{ base: "160px", md: "180px" }}
          >
            {category
              ? dataFilter.map((item) => <Item key={item.id} item={item} />)
              : info.map((item) => <Item key={item.id} item={item}></Item>)}
          </SimpleGrid>
        </div>
      )}
    </>
  );
};
