import Header from '../../components/Header'
import Restaurante from '../../components/Restaurante'
import { restaurantes } from '../../data/restaurantes'
import { Container } from '../../styles'

import * as S from './styles'

const Home = () => (
  <>
    <Header />
    <Container>
      <S.Lista>
        {restaurantes.map((r) => (
          <Restaurante key={r.id} restaurante={r} />
        ))}
      </S.Lista>
    </Container>
  </>
)

export default Home
