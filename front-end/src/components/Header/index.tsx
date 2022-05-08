import React, { useState } from 'react'

import {
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
} from './styles'

const Header = ({page = 'null'}) => {
  
  const [search, setSearch] = useState('');

  return (
    <Navbar>
        <ContainerLogo>
            {/* <Logo /> */}
            <TextLogo>
                CAR
            </TextLogo>
        </ContainerLogo>

        <Menu>
            <MenuList>
            {['/', 'About', 'cars/create', 'cars'].map((item, index) => item && (
                <Item key={index}>
                    <Anchor href={`${item}`}>{item}</Anchor>
                </Item>
            ))}
            </MenuList>
        </Menu>
      
        {page === 'null' ? (
            <ContainerSearchInput>
                <SearchInput
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} 
                />
                <SearchIcon />
            </ContainerSearchInput>
            ): (<></>)
        }
        <ContainerProfile>
            <Avatar />
        </ContainerProfile>
    </Navbar>
  )
}

export default Header