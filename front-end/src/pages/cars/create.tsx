import React, { useState } from 'react'
import type { NextPage } from 'next'

import NextLink from 'next/link'
import { useRouter } from 'next/router'

import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

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

type CreateCarForm = {
    brand: string;
    model: string;
    sign: string;
    fabrication: number;
    type: string;
    version: string;
    form: string;
    // color: boolean[];
}

const schema = yup.object({
    brand: yup.string().required("A marca é obrigátória").matches(/^[aA-zZ\s]+$/, "Apenas caracteres alfabeticos"),
    model: yup.string().required("O modelo é obrigátório"),
    sign: yup.string().required("A placa é obrigátória"),
    fabrication: yup.number()
        .positive("O ano de fabricação tem que ser um caractere positivo")
        .integer("O ano de fabricação tem que ser um caractere alfanúmerico inteiro")
        .required("A data de fabricação é obrigatória")
        .min(4, "O ano de fabricação tem que possuir 4 digitos"),
    // .max(4, "O ano de fabricação tem que possuir 4 digitos"),
    type: yup.string().required(),
    version: yup.string().required(),
    form: yup.string().required(),
    // color: yup.boolean()
    // .oneOf([true], "Você tem que escolher uma cor")
    // .required("Você tem que escolher uma cor")
})

const Create: NextPage = () => {

    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm<CreateCarForm>({
        resolver: yupResolver(schema),
        defaultValues: {
            brand: '',
            model: '',
            sign: '',
            fabrication: 1900,
            form: '',
            type: '',
            version: '',
            // color: [false,false,false,false,false]
        }
    })

    const [success, setSuccess] = useState('null')

    const handleSubmitForm: SubmitHandler<CreateCarForm> = async (values) => {
        console.log(values)
        const { brand, model, sign, fabrication, form, type, version } = values
        try {
            const response = await fetch('http://localhost:3001/create-car', {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    brand,
                    model,
                    sign,
                    fabrication,
                    form,
                    type,
                    version
                }),
            })
            const json = await response.json()
            console.log(json)
            setSuccess('true')
        } catch (err) {
            console.log(err)
            setSuccess('false')
        }
        // values.event?.preventDefault()
    }

    const [colorSelect, setColorSelect] = useState('')

    const handleSelecteColor = (color: string) => {
        setColorSelect(color)
    }

    return (
        <Container>
            <h1 style={{ textAlign: 'center' }}>
                CREATE
            </h1>
            {success === 'true' ? (
                <p style={{ color: 'green', textAlign: 'center' }}>
                    Carro cadastro realizado com sucesso ✔
                </p>
            ) : success === 'false' ? (
                <p style={{ color: 'red', textAlign: 'center' }}>
                    Ocorreu um erro no cadastro ❌
                </p>
            ) : (<p></p>)}
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
                    method="post"
                    onSubmit={handleSubmit(handleSubmitForm)}
                >
                    <ContentInput>
                        <SelectContent>
                            <SelectOption {...register('type')}>
                                <Option value="carro">
                                    Carro
                                </Option>
                                <Option value="moto">
                                    Moto
                                </Option>
                            </SelectOption>
                        </SelectContent>
                        {errors.type ? (
                            <p style={{ color: "red" }}>{errors.type?.message}</p>
                        ) : (
                            <p style={{ color: 'transparent' }}>a</p>
                        )}
                    </ContentInput>

                    <ContentInput>
                        <InputContainer>
                            {/* <Label htmlFor='brand'>Marca</Label> */}
                            <Input
                                defaultValue="fabrication"
                                placeholder="Ano de Fabricação"
                                {...register('fabrication')}
                            />
                        </InputContainer>
                        {errors.fabrication ? (
                            <p style={{ color: "red" }}>{errors.fabrication?.message}</p>
                        ) : (
                            <p style={{ color: 'transparent' }}>a</p>
                        )}
                    </ContentInput>

                    <ContentInput>
                        <SelectContent>
                            <SelectOption
                                defaultValue=""
                                {...register('version')}
                            >
                                <Option value="Audi">
                                    Audi
                                </Option>
                                <Option value="Mercedez">
                                    Mercedez
                                </Option>
                            </SelectOption>
                        </SelectContent>
                        {errors.version ? (
                            <p style={{ color: "red" }}>{errors.version?.message}</p>
                        ) : (
                            <p style={{ color: 'transparent' }}>a</p>
                        )}
                    </ContentInput>

                    <ContentInput>
                        <InputContainer>
                            {/* <Label htmlFor='brand'>Marca</Label> */}
                            <Input
                                placeholder="Modelo"
                                {...register('model')}
                            />
                        </InputContainer>
                        {errors.model ? (
                            <p style={{ color: "red" }}>{errors.model?.message}</p>
                        ) : (
                            <p style={{ color: 'transparent' }}>a</p>
                        )}
                    </ContentInput>

                    <ContentInput>
                        <InputContainer>
                            {/* <Label htmlFor='brand'>Marca</Label> */}
                            <Input
                                placeholder="Marca"
                                {...register('brand')}
                            />
                        </InputContainer>
                        {errors.brand ? (
                            <p style={{ color: "red" }}>{errors.brand?.message}</p>
                        ) : (
                            <p style={{ color: 'transparent' }}>a</p>
                        )}
                    </ContentInput>

                    <ContentInput>
                        <SelectContent>
                            <SelectOption {...register('form')}>
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
                        {errors.form ? (
                            <p style={{ color: "red" }}>{errors.form?.message}</p>
                        ) : (
                            <p style={{ color: 'transparent' }}>a</p>
                        )}
                    </ContentInput>

                    <ContentInput>
                        <InputContainer>
                            {/* <Label htmlFor='sign'>Placa:</Label> */}
                            <Input
                                placeholder="Placa"
                                id='sign'
                                {...register('sign')}
                            />
                        </InputContainer>
                        {errors.sign ? (
                            <p style={{ color: "red" }}>{errors.sign?.message}</p>
                        ) : (
                            <p style={{ color: 'transparent' }}>a</p>
                        )}
                    </ContentInput>
                    {/*                 
                <ContentInput>
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
                                        defaultChecked={false}
                                        checked={true}
                                        {...register('color')}
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
                    {errors.color ? (
                        <p style={{color: "red"}}>{errors.color?.message}</p>
                    ) : ( 
                        <p style={{ color: 'transparent' }}>a</p>
                    )}
                </ContentInput>
                 */}
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
                            ) : (<></>)
                        }
                    </ContentImage>

                    <ContainerAction>

                        <Button type="submit">
                            <Text>Create</Text>
                            <AiOutlineCar size={24} />
                        </Button>

                        <NextLink href="/" passHref>
                            <Button type="submit">
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

export default Create
