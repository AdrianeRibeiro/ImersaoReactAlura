import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import videoRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'
import useForm from '../../../hooks/useForm'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'

export default function CadastroVideo() {
  const history = useHistory()
  const [categorias, setCategorias] = useState([])
  const categoriasTitulos = categorias.map(({ titulo }) => titulo)

  const { handleOnChange, valores } = useForm({
    titulo: '',
    url: '',
    categoria: ''
  })

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasCadastradas) => {
        setCategorias(categoriasCadastradas)
      })
  }, [])

  function handleSubmit(e) {
    e.preventDefault()

    const categoriaEscolhida = categorias.find((categoria) => {
      return categoria.titulo === valores.categoria
    })
 
    videoRepository.createVideo({
      titulo: valores.titulo,
      url: valores.url,
      categoriaId: categoriaEscolhida.id,
    })
      .then(() => {
        history.push('/')
      })
  }
 
  return (
    <PageDefault>
      <div style={{width: '80%', margin: 'auto'}}>
        <h1>Cadastro de Video</h1>

        <form onSubmit={handleSubmit}>
          <FormField 
            label='Título do Vídeo'
            type='text'
            name='titulo'
            value={valores.titulo}
            onChange={handleOnChange}
          
          />

          <FormField 
            label='URL'
            type='text'
            name='url'
            value={valores.url}
            onChange={handleOnChange} 
          />  

          <FormField 
            label='Categoria'
            type='text'
            name='categoria'
            value={valores.categoria}
            onChange={handleOnChange}
            suggestions={categoriasTitulos}
          />  

          <Button>Cadastrar</Button>
        </form>

        <br/>

        <Link to="/cadastro/categoria">
          <p>Cadastrar Categoria</p>
        </Link>
      </div>
    </PageDefault>
  )
}
