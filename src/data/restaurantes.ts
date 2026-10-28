import prato from '../assets/prato.svg'
import { Prato, Restaurante } from '../models/Restaurante'

const textoLongo =
  'A La Dolce Vita Trattoria traz o sabor autêntico da culinária italiana para a sua casa. Desfrute de massas caseiras, pratos e sobremesas feitos com ingredientes frescos e selecionados. Entrega rápida, pratos bem embalados e muito sabor!'

const pizzas: Prato[] = [1, 2, 3, 4, 5, 6].map((n) => ({
  id: n,
  nome: 'Pizza Marguerita',
  descricao:
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e tradição!',
  imagem: prato
}))

export const restaurantes: Restaurante[] = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    nota: 4.9,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushi, sashimi e pratos quentes preparados com ingredientes frescos e entrega rápida. Experimente já!',
    categoria: 'Japonesa',
    destaque: true,
    imagem: prato,
    pratos: pizzas
  },
  ...[2, 3, 4, 5, 6].map((id) => ({
    id,
    titulo: 'La Dolce Vita Trattoria',
    nota: 4.6,
    descricao: textoLongo,
    categoria: 'Italiana',
    destaque: false,
    imagem: prato,
    pratos: pizzas
  }))
]
