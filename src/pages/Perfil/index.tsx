import { Navigate, useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import HeaderPerfil from '../../components/HeaderPerfil'
import Prato from '../../components/Prato'
import { restaurantes } from '../../data/restaurantes'
import { Container } from '../../styles'

import * as S from './styles'

const Perfil = () => {
  const { id } = useParams()
  const restaurante = restaurantes.find((r) => r.id === Number(id))

  if (!restaurante) return <Navigate to="/" />

  return (
    <>
      <HeaderPerfil />
      <Banner
        categoria={restaurante.categoria}
        titulo={restaurante.titulo}
        imagem={restaurante.imagem}
      />
      <Container>
        <S.Lista>
          {restaurante.pratos.map((p) => (
            <Prato key={p.id} prato={p} />
          ))}
        </S.Lista>
      </Container>
    </>
  )
}

export default Perfil
