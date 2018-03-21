import React from 'react'
import { css } from 'react-emotion'
import { Header1, ContainerFourOh } from './styles'

const notFound = css`
  padding-top: 14%;
`

export const FourOhFour = () => (
  <ContainerFourOh>
    <Header1 className={notFound}>PAGE NOT FOUND - 404</Header1>
  </ContainerFourOh>
)
