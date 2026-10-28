import * as S from './styles'
import { BotaoCarrinho } from '../../styles'

import { Prato as PratoType } from '../../models/Restaurante'

type Props = {
  prato: PratoType
}

const Prato = ({ prato }: Props) => (
  <S.Card>
    <img src={prato.imagem} alt={prato.nome} />
    <h3>{prato.nome}</h3>
    <p>{prato.descricao}</p>
    <BotaoCarrinho type="button">Adicionar ao carrinho</BotaoCarrinho>
  </S.Card>
)

export default Prato
