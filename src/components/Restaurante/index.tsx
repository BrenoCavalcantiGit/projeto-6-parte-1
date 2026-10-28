import * as S from './styles'
import { BotaoLink } from '../../styles'
import Tags from '../Tags'

import { Restaurante as RestauranteType } from '../../models/Restaurante'

type Props = {
  restaurante: RestauranteType
}

const Restaurante = ({ restaurante }: Props) => {
  const tags = restaurante.destaque
    ? ['Destaque da semana', restaurante.categoria]
    : [restaurante.categoria]

  return (
    <S.Card>
      <img src={restaurante.imagem} alt={restaurante.titulo} />
      <Tags tags={tags} />
      <S.Conteudo>
        <S.Cabecalho>
          <h3>{restaurante.titulo}</h3>
          <div>
            <span>{restaurante.nota}</span>
            <span>⭐</span>
          </div>
        </S.Cabecalho>
        <p>{restaurante.descricao}</p>
        <BotaoLink to={`/perfil/${restaurante.id}`}>Saiba mais</BotaoLink>
      </S.Conteudo>
    </S.Card>
  )
}

export default Restaurante
