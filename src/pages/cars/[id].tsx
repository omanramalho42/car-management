import React, { useState, SyntheticEvent } from 'react'
import type { NextPage } from 'next'
import NextLink from 'next/link'

import {
    Container,
    ContentForm,
    Form,
    ContentInput,
    Input,
    Label,
    Button,
    Icon,
    InputContainer,
    SelectContent,
    SelectOption,
    Option,
    ContainerColor,
    Color,
    ContainerAction,
    ContentImage,
    Image,
    Text
} from '../../styles/Cars/styles'

import {
    AiOutlineCheck,
    AiOutlineClose,
    AiOutlineBackward,
    AiOutlineCar
} from 'react-icons/ai'

const Car: NextPage = () => {

  const handleSubmitForm = (e: SyntheticEvent) => {
    e.preventDefault()
    console.log(e)
  }

  const [colorSelect, setColorSelect] = useState('')

  const handleSelecteColor = (color: string) => {
    setColorSelect(color)
  }

  return (
    <Container> 
        <h1 style={{ textAlign: 'center' }}>
            Edit
        </h1>
        <ContentForm>

            <NextLink href="/" passHref>
                <AiOutlineClose 
                    size="24" 
                    style={{ 
                        color: 'red', 
                        backgroundColor: 'transparent', 
                        marginBottom: ' 0 10px',
                        justifyContent: 'flex-end',
                        cursor: 'pointer'
                    }} 
                />
            </NextLink>

            <Form 
                action='submit' 
                onSubmit={(e) => handleSubmitForm(e)}
            >
                {/* <ContentInput> */}
                    <SelectContent>
                        <SelectOption>
                            <Option value="carro">
                                Carro
                            </Option>
                            <Option value="moto">
                                Moto
                            </Option>
                        </SelectOption>
                    </SelectContent>
                
                    <InputContainer>
                        {/* <Label htmlFor='brand'>Marca</Label> */}
                        <Input
                            placeholder="Ano de Fabricação"
                            id='fabrication'
                            name="fabrication"
                        />
                    </InputContainer>

                    <SelectContent>
                        <SelectOption>
                            <Option value="Audi">
                                Audi
                            </Option>
                            <Option value="Mercedez">
                                Mercedez
                            </Option>
                        </SelectOption>
                    </SelectContent>

                {/* </ContentInput> */}

                {/* <ContentInput> */}
                    <InputContainer>
                        {/* <Label htmlFor='brand'>Marca</Label> */}
                        <Input
                            placeholder="Modelo"
                            id='model'
                            name="model"

                        />     
                    </InputContainer>
                    <InputContainer>
                        {/* <Label htmlFor='brand'>Marca</Label> */}
                        <Input
                            placeholder="Marca"
                            id='brand'
                            name="brand"
                        />
                    </InputContainer> 
                {/* </ContentInput> */}

                {/* <ContentInput> */}
                     <SelectContent>
                        <SelectOption>
                            <Option value="conversivel">
                                Conversivel
                            </Option>
                            <Option value="sedan">
                                Sedan
                            </Option>
                            <Option value="ret">
                                Ret
                            </Option>
                        </SelectOption>
                    </SelectContent>

                    <InputContainer>
                        {/* <Label htmlFor='sign'>Placa:</Label> */}
                        <Input
                            placeholder="Placa"
                            id='sign'
                            name="barand"
                        />
                    </InputContainer> 
                {/* </ContentInput> */}

                <ContainerColor color={colorSelect}>
                    {['red', 'blue', 'black', 'white', 'gray'].map((color, index) => 
                        color && (
                            <div
                                key={`${index}${color}`} 
                                style={{ 
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                <Color 
                                    color={color}
                                    onClick={() => handleSelecteColor(color)} 
                                />
                                {colorSelect ===  color 
                                    ? (
                                        <AiOutlineCheck
                                            size={20} 
                                            style={{
                                                color: 'yellow',
                                                position: 'relative', 
                                                left: '-22.5',
                                                top: '1',
                                            }}
                                        />
                                    ) : (
                                        <></>
                                    )
                                }
                            </div>
                        )
                    )}
                </ContainerColor>

                <ContentImage>
                    {colorSelect === 'blue' 
                        ? (
                            <Image src="/images/car_blue.png" /> 
                        ) : colorSelect === 'red' ? (
                            <Image src="/images/car_red.png/" />
                        ) : colorSelect === 'white' ? (
                            <Image src="/images/car_white.png/" />
                        ) : colorSelect === 'black' ? (
                            <Image src="/images/car_black.png/" />
                        ) : colorSelect === 'gray' ? (
                            <Image src="/images/car_gray.png/" />
                        ): ( <></> )
                    }
                </ContentImage>
                
                <ContainerAction>
                    <Button type="submit" onClick={(e) => handleSubmitForm(e)}>
                        <Text>Car</Text>
                        <AiOutlineCar size={24} />
                    </Button>
                    <NextLink href="/cars" passHref>
                        <Button type="submit" style={{ marginTop: '0' }}>
                            <Text>Voltar</Text>
                            <AiOutlineBackward size={24} />
                        </Button>
                    </NextLink>
                </ContainerAction>

            </Form>

        </ContentForm>
    </Container>
  )
}

export default Car
