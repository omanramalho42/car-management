import React, { useState } from 'react'

import Header from '../../components/Header'

import {
  Container,
  Content,
  Card,
  Button,
  Text,
  TextInfo,
  ContentInfo,
  ContainerSearchInput,
  SearchInput,
  SearchIcon,
} from '../../styles/Cars/Preview/styles'

import { AiOutlineEdit } from 'react-icons/ai'

import NextLink from 'next/link'
import { useEffect } from 'react';

interface Props {
  data: {
    _id: string;
    brand: string;
    model: string;
    sign: string;
    form: string;
    fabrication: Number;
  }[]
}

const Cars = (props: Props) => {

  const [cars, setCars] = useState({});
  useEffect(() => {
    setCars(props)
  }, [props])

  console.log("cars:")
  console.log(cars)

  console.log("props frontend:")
  console.log(props.data)


  const [search, setSearch] = useState("")

  return (
    <>
      <Header page="preview" />
      <Container>

        <ContainerSearchInput>
          <SearchInput
            // defaultValue="" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchIcon />
        </ContainerSearchInput>

        {search !== "" ? props.data.filter((item) => item.brand.includes(search)).map(filterYear => (
          <Card key={filterYear._id}>
            <Text>CARRO</Text>
            <ContentInfo>
              <TextInfo>Marca: {filterYear.brand}</TextInfo>
              {/* <TextInfo>Id: {item._id}</TextInfo> */}
              <TextInfo>Modelo: {filterYear.model}</TextInfo>
              <TextInfo>Ano de fabricação: {filterYear.fabrication}</TextInfo>
              <TextInfo>Cor</TextInfo>
              <TextInfo>forma: {filterYear.form}</TextInfo>
              <TextInfo>Placa: {filterYear.sign}</TextInfo>
            </ContentInfo>
            <NextLink href={`/cars/${filterYear._id}`} passHref>
              <Button>
                <Text>Edit</Text>
                <AiOutlineEdit size={24} />
              </Button>
            </NextLink>
          </Card>
        )) : (
          <Content>
            {props.data.map((item, index) => item && (
              <Card key={index}>
                <Text>CARRO</Text>
                <ContentInfo>
                  <TextInfo>Marca: {item.brand}</TextInfo>
                  {/* <TextInfo>Id: {item._id}</TextInfo> */}
                  <TextInfo>Modelo: {item.model}</TextInfo>
                  <TextInfo>Ano de fabricação: {item.fabrication}</TextInfo>
                  <TextInfo>Cor</TextInfo>
                  <TextInfo>forma: {item.form}</TextInfo>
                  <TextInfo>Placa: {item.sign}</TextInfo>
                </ContentInfo>
                <NextLink href={`/cars/${item._id}`} passHref>
                  <Button>
                    <Text>Edit</Text>
                    <AiOutlineEdit size={24} />
                  </Button>
                </NextLink>
              </Card>
            ))}
          </Content>
        )}
      </Container>
    </>
  )
}

export default Cars

export const getServerSideProps = async () => {
  const response = await fetch(`https://car-management-production-c408.up.railway.app/`);
  const data: Props = await response.json();

  console.log("data preview:");
  console.log(data);

  return {
    props: { data }
  }
}