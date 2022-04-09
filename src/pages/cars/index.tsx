import React from 'react'

import {
  Container,
  Content,
  Card,
  Button,
  Text,
  TextInfo,
  ContentInfo
} from '../../styles/Cars/Preview/styles'

import { AiOutlineEdit } from 'react-icons/ai'

import NextLink from 'next/link'

interface Props {
  datahome: {
    brand: string;
    model: string;
    sign: string;
    form: string;
    fabrication: Number;
  }[];
}

const Cars = (props: any) => {
  console.log(props.datahome);
  return (
    <Container>
      {/* <Header /> */}
        <Content>
          {[props].map((item,index) => item &&(
            <Card key={index}>
              <Text>MODELO</Text>
              <ContentInfo>
                  <TextInfo>Marca</TextInfo>
                  <TextInfo>Modelo</TextInfo>
                  <TextInfo>Ano</TextInfo>
                  <TextInfo>Cor</TextInfo>
                  <TextInfo>Categoria</TextInfo>
                  <TextInfo>Placa</TextInfo>
              </ContentInfo>
              <NextLink href={`/cars/${item}`} passHref>
                <Button>
                  <Text>Edit</Text>
                  <AiOutlineEdit size={24} />
                </Button>
              </NextLink>
          </Card>
          ))}
        </Content>
    </Container>
  )
}

export default Cars

export const getServerSideProps = async ( ) => {
  const response = await fetch(`http://localhost:3001`);
  const data = await response.json();
  console.log("data:");
  console.log(data);

  return {
    props: data
  }
}