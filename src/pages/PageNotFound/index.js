import React from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../components/PageDefault'
import styled from 'styled-components'

const Container = styled.div`
  margin: auto;
  width: 500px;
  text-align: center;
  padding-top: 200px;
`

export default function PageNotFound() {
  return (
    <PageDefault>
      <Container>
        <h1>Erro 404</h1>
        <h1>Página não encontrada</h1>

        <Link to="/">
          Ir para home
        </Link>
      </Container>
    </PageDefault>
  )
}