import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'

export const Container = styled.div`
    background-image: url('./images/bg.png');
    background-size: cover;
    overflow-x: hidden;

    height: 100vh;
    width: 100vw;
`
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

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    background-color: transparent;

    margin-top: 10%;
`

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    
    padding: 10px;
    align-items: center;
`

export const TextContent = styled.h2`
    text-align: center;
    
    font-size: 5rem;
    
    color: ${({ theme }) => theme.colors.text};

    cursor: pointer;
`

export const SubTextContent = styled.h3`
    text-align: center;

    font-size: 4.5rem;
    
    color: ${({ theme }) => theme.colors.effect};

    cursor: pointer;
`
export const ContainerButton = styled.div`
    display: flex;
    
    justify-content: center;

    padding: 10px;
`

export const Button = styled.div`
    padding: 10px;
    margin: 0 10px;
    
    border-radius: 33px;
    border: 2px solid ${({ theme }) => theme.colors.button};

    color: ${({ theme }) => theme.colors.text};

    cursor: pointer;

    transition: 0.455s;
    &:hover {
        box-shadow: 0 0 12px 6px 
            ${({ theme }) => 
                theme.colors.button_effect
        };
        background-color: ${({ theme }) => theme.colors.button_effect};
        
        color: ${({ theme }) => theme.colors.text};
   
        border: 2px solid transparent;
    }
`
