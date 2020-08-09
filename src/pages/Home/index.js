import React, { useState, useEffect }  from 'react'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel/index'
import categoriasRepository from '../../../src/repositories/categorias'
import PageDefault from '../../components/PageDefault'

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([])

  useEffect(() => {
    categoriasRepository.getAllCategoriesWithVideos()
      .then((categoriasComVideo) => {
        setDadosIniciais(categoriasComVideo)
      })
      .catch((error) => {
        alert(error.message)
      })
  }, [])

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if(indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={"Amon Amarth é uma banda de viking metal da cidade de Tumba, Suécia. O grupo, que aborda a temática viking em suas letras, se tornou um dos nomes mais respeitados da cena heavy metal."}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          )
        }

        return <Carousel key={categoria.id} category={categoria}/>
      })}
    </PageDefault>
  )
}

export default Home;