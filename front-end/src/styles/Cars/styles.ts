import { FieldError } from 'react-hook-form';
import styled from 'styled-components'

export const Container = styled.div`
    display: grid;

    justify-content: center;
`

export const ContentForm = styled.div`
    display: flex;

    margin-top: 15%;

    border-radius: 15px;
    box-shadow: 0 0 12px 6px rgba(0,0,0,0.3);

    padding: 10px;

    background-color: ${({ theme }) => theme.colors.primary};
`

export const Form = styled.form`
    display: grid;

    margin-top: 10px;
    padding-right: 15px;

    grid-template-columns: 1fr 1fr;

    align-items: center;

    background-color: ${({ theme }) => theme.colors.primary};

    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;

        margin: 10px;
    };
`

interface LabelProps {
    text: string;
}

export const Label = styled.label.attrs<LabelProps>({
    // content: `${({ text }) :Lavel}`
})`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text_dark};
`

export const ContentInput = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-right: 15px;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    
    background-color: ${({ theme }) => theme.colors.input};
    
    padding: 5px;
    margin: 15px;

    border-radius: 15px;

    z-index: 2;

    transition: 0.425s;
    &:hover {
        box-shadow: 0 0 12px 6px ${({ theme }) => theme.colors.effect};
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
    };
`

export const Input = styled.input.attrs<HTMLInputElement>({
    type: 'text',
})`
    all: unset;
    
    color: ${({ theme }) => theme.colors.text};

    padding: 5px;
    cursor: pointer;

    &::placeholder {
        color: ${({ theme }) => theme.colors.text};
    }
`

export const ContainerAction = styled.div`
    display: grid;

    background-color: ${({ theme }) => theme.colors.primary};

    grid-column-start: 1;
    grid-column-end: 3;

    align-items: center;

    @media screen and (max-width: 1000px) {
        display: flex;
        margin-top: 10px;
        width: 100%
    };
`

export const Button = styled.button`
    display: flex;
    flex: 1;

    padding: 15px;
    margin: 10px 10px;

    border-radius: 33px;

    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.effect};

    transition: 0.425s;
    &:hover {
        box-shadow: 0 0 12px 6px ${({ theme }) => theme.colors.effect_secondary}
        /* background-color: ${({ theme }) => theme.colors.effect_secondary}; */
    }

    @media screen and (max-width: 1000px) {
        width: 100%
    };

`

export const Text = styled.p`
    font-size: 1rem;
    font-weight: bold;

    text-transform: uppercase;
    margin: 0 5px;

    text-align: center;
    color: ${({ theme }) => theme.colors.text_dark};
`

export const Icon = styled.i`

`

export const SelectContent = styled.div`
    display: flex;
    align-items: center;

    padding: 10px;
    margin: 0 15px;

    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.input};
    
    transition: 0.425s;
    &:hover {
        box-shadow: 0 0 12px 6px ${({ theme }) => theme.colors.effect};
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
    };
`

export const SelectOption = styled.select.attrs({
    // name: 'select'
})`
    flex: 1;
    display: flex;
    
    background-color: transparent;
    border: none;
    
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;

    &:active {
        border: none;
    }
`

export const Option = styled.option`
    text-align: center;

    background-color: ${({ theme }) => theme.colors.input};
`

interface ColorProps {
    color: string;
}

export const ContainerColor = styled.div`
    display: flex;

    padding: 8px;
    margin: 10px 10px;

    background-color: ${({ theme }) => theme.colors.input};
    border-radius: 15px;
    
    box-shadow: 0 0 12px 6px ${({ theme, color }) => color ? color : 'transparent'};

    justify-content: space-between;
    
    z-index: 2;

    transition: 0.425s;
    &:hover {
        box-shadow: 0 0 12px 6px ${({ theme, color }) => color ? color : theme.colors.effect};
    }

    @media screen and (max-width: 1000px) {
        width: 100%
    };
`

interface ColorProps {
    color: string;
}

export const Color = styled.input.attrs<ColorProps>({
    type: 'checkbox'
})`
    all: unset;
    width: 25px;
    height: 25px;

    background-color: ${({ color }) => color };

    border-radius: 15px;

    cursor: pointer;
`

export const ContentImage = styled.div`
    display: grid;

    padding: 10px;
    margin: 10px;
    
    max-height: 100%;
    max-width: 600px;

    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 15px;

    grid-column-start: 1;
    grid-column-end: 3;

    margin: auto;
    justify-content: center;
`

export const Image = styled.img.attrs({
    // src: '/images/car.png'
})`
    width: 100%;
    height: 100%;
`