import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'
import Categorias from './Categorias'
import Button from '../../../components/Button'
import useForm from '../../../../src/hooks/useForm'
import categoriasRepository from '../../../repositories/categorias'

export default function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#9f7882'
  }

  const { handleOnChange, valores, clearForm } = useForm(valoresIniciais)

  const [categorias, setCategorias] = useState([])
  
  function handleSubmit(e) {
    e.preventDefault()

    categoriasRepository.createCategoria({
      titulo: valores.titulo,
      descricao: valores.descricao,
      cor: valores.cor
    })
      .then((categoriaCadastrada) => {
        setCategorias([
          ...categorias, categoriaCadastrada
        ])
      })

    clearForm()
  }

  //array vazio: ocorre somente uma vez: quando o componente carregar
  useEffect(() => {
    categoriasRepository.getAllCategoriesWithVideos()
      .then((categoriasComVideo) => {
        setCategorias(categoriasComVideo)
      })
      .catch((error) => {
        alert(error.message)
      })
  }, [])

  return (
    <PageDefault>
      <div style={{width: '80%', margin: 'auto'}}>
        <h1>Cadastro de Categoria</h1>

        <form onSubmit={handleSubmit}>
          <FormField 
            label='Nome da Categoria'
            type='text'
            name='titulo'
            value={valores.titulo}
            onChange={handleOnChange}
          
          />

          <FormField 
            label='Descrição'
            type='textarea'
            name='descricao'
            value={valores.descricao}
            onChange={handleOnChange}
          />  

          <FormField 
            label='Cor'
            type='color'
            name='cor'
            value={valores.cor}
            onChange={handleOnChange}
          />  

          <Button>Cadastrar</Button>
        </form>

        <Categorias categorias={categorias}/>

        <Link to="/">
          Ir para home
        </Link>

        <br/>
        <br/>
      </div>
    </PageDefault>
  )
}
