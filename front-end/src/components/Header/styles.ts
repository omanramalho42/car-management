import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'

export const Navbar = styled.div`
    display: flex;

    align-items: center;

    padding: 5px;
`

export const Menu = styled.nav``

export const MenuList = styled.ul`
    display: flex;
    
    justify-content: center;
    
    list-style: none;
`

export const Item = styled.li`
    padding: 1rem;
`

export const Anchor = styled.a`
    text-decoration: none;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};

    transition: 0.425s;
    &:hover {
        color: ${({ theme }) => theme.colors.button_effect};
    }
`

export const ContainerSearchInput = styled.div`
    display: flex;
    flex: 1;

    justify-content: space-between;

    background-color: ${({ theme }) => theme.colors.input};
    
    border-radius: 15px;
    border: 2px solid transparent;

    color: ${({ theme }) => theme.colors.text};

    padding: 0.5rem;
    margin: auto;

    transition: 0.425s;
    &:hover {
        background-color: ${({ theme }) => theme.colors.input_effect};
        border: 2px solid ${({ theme }) => theme.colors.button_effect};
        color: ${({ theme }) => theme.colors.button_effect};
        box-shadow: 0 0 6px 3px ${({ theme }) => theme.colors.button_effect};
    }
`

export const SearchInput = styled.input.attrs({
    placeholder: 'teste',
    placeholderTextColor: 'white'
})`
    all: unset;
    flex: 1;

    cursor: pointer; 
`

export const SearchIcon = styled(AiOutlineSearch)`
    justify-content: flex-end;

    font-size: 1.3rem;
    
    color: 'black';

    cursor: pointer;
`

export const ContainerProfile = styled.div`
    display: flex;
    
    padding: 5px;

    margin: 0 10px;
`

export const Avatar = styled.img.attrs({
    src: 'https://github.com/omanramalho42.png',
})`
    border-radius: 15px;
    max-width: 42px;
    min-width: 22px;

    cursor: pointer;
`

export const ContainerLogo = styled.div`
    display: flex;
    padding: 5px;
`

export const Logo = styled.img`
    max-width: 42px;
    min-width: 22px;

    cursor: pointer;
`
export const TextLogo = styled.h1`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text };

    cursor: pointer;
`