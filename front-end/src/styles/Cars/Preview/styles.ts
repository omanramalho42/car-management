import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    margin: auto;

    padding: 10px 50px;

    @media screen and (max-width: 1400px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    };

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
    };

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    };

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
    };
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;

    width: 200px;
    height: 200px;

    background-color: ${({ theme }) => theme.colors.effect_secondary};

    box-shadow: 0 0 12px 6px rgba(0,0,0,0.3);;
    
    border-radius: 15px;

    padding: 10px;
    margin: 20px;

    justify-content: space-between;

    @media screen and (max-width: 1400px) {
        width: 225px;
        height: 225px;
    };

    @media screen and (max-width: 1200px) {
        width: 250px;
        height: 250px;
    };

    @media screen and (max-width: 1000px) {
        width: 340px;
        height: 340px;
    };

    @media screen and (max-width: 800px) {
        padding: 5px;
        width: 375px;
        height: 375px;
    };
    
    transition: 0.425s;
    &:hover {
        transform: scale(1.1);
    }
`

export const TextInfo = styled.h5`
    font-weight: normal;
    color: ${({ theme }) => theme.colors.text_dark};
`

export const ContentInfo = styled.div`
    display: flex;
    flex-direction: column;

    padding: 5px;
`

export const Button = styled.button`
    display: flex;
    padding: 15px;

    align-items: center;

    background-color: ${({ theme }) => theme.colors.effect};
    border-radius: 15px;
`

export const Text = styled.h4`
    font-size: 1em;
    font-weight: bold;

    text-align: center;

    color: ${({ theme }) => theme.colors.text_dark};
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