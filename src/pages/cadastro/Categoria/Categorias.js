import React from 'react'
import styled, {css} from 'styled-components';

const Table = styled.table`
  width: 100%;
  margin: 'auto';
  border-collapse: collapse;
  text-align: center;
  border: 1px solid var(--white);
  margin-top: 30px;
  margin-bottom: 30px;
  background: #53585D;
  font-size: 18px;
`

const Thead = styled.thead`
  border: 1px solid var(--white);
`

const Tr = styled.tr`
  height: 40px;

  ${({ color }) => css`
    &:hover {
      background-color: ${color};
      border: 1px solid black;
      font-weight: bold;
      color: black;
    }
  `};
`

const Th = styled.th`
  border-bottom: 1px solid var(--white);
`
const Td = styled.td``

export default function Categorias({categorias}) {

  const index = categorias.map((categoria) => {
    return (
      <Tr key={`categoria_${categoria.id}`} color={categoria.cor}>
        <Td>{categoria.titulo}</Td>
        <Td>{categoria.descricao}</Td>
        <Td style={{backgroundColor: categoria.cor}}></Td>
      </Tr>
    )
  })

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Descrição</Th>
          <Th>Cor</Th>
        </Tr>
      </Thead>
      <tbody>
        {index}
      </tbody>
    </Table>
  )
}

