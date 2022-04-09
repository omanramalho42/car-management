import type { GetServerSideProps, NextPage } from 'next'
import { useState, SyntheticEvent } from 'react'

import NextLink from 'next/link'

import {
  Container,
  Navbar,
  Menu,
  MenuList,
  Item,
  Anchor,
  ContainerSearchInput,
  SearchInput,
  SearchIcon,
  ContainerProfile,
  Avatar,
  ContainerLogo,
  Logo,
  TextLogo,
  Content,
  ContainerButton,
  Button,
  ContainerText,
  TextContent,
  SubTextContent,
} from '../styles/Home/styles'

interface Props {
  text_one: string;
  text_second: string;
  btn_title: string;
  btn_title_two: string;
  btn_link: string;
  btn_link_two: string;
}

const Home = ({ 
  text_one, 
  text_second, 
  btn_title, 
  btn_link, 
  btn_link_two, 
  btn_title_two 
}: Props) => {

  const [search, setSearch] = useState('');

  return (
   <Container>

     <Navbar>
      <ContainerLogo>
        {/* <Logo /> */}
        <TextLogo>
          CAR
        </TextLogo>
      </ContainerLogo>

        <Menu>
          <MenuList>
            {['Home', 'About', 'Create', 'List'].map((item, index) => item && (
              <Item key={index}>
                <Anchor href="">{item}</Anchor>
              </Item>
            ))}
          </MenuList>
        </Menu>
        
        <ContainerSearchInput>
            <SearchInput
              value={search}
              onChange={(e) => setSearch(e.target.value)} 
            />
            <SearchIcon />
        </ContainerSearchInput>

        <ContainerProfile>
          <Avatar />
        </ContainerProfile>
    </Navbar>

    <Content>
      <ContainerText>
        <TextContent className='text_one'>
            {text_one ? text_one : 'Lorem Ipsum Dollar'}
        </TextContent>
        <SubTextContent className='text_second'>
        {text_second ? text_second : 'Sign Merc'}
        </SubTextContent>
      </ContainerText>

      <ContainerButton>
        <NextLink href={"/cars/create"} passHref>
          <Button className='btn_title'>{btn_title ? btn_title : 'Create'}</Button>
        </NextLink>
        <NextLink href="/cars" passHref>
          <Button className='btn_title_two'>{btn_title_two ? btn_title_two : 'Preview'}</Button>
        </NextLink>
      </ContainerButton>
      
    </Content>

   </Container>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:3001/`)
  const data = await response.json();
  console.log("💥")
  console.log(data);
  return {
    props: { data }
  }
  
}

export default Home
