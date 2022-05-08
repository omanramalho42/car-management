import styled from 'styled-components'

export const Container = styled.div`
    background-image: url('./images/bg.png');
    background-size: cover;
    overflow-x: hidden;

    height: 100vh;
    width: 100vw;
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
