export type Prato = {
  id: number
  nome: string
  descricao: string
  imagem: string
}

export type Restaurante = {
  id: number
  titulo: string
  nota: number
  descricao: string
  categoria: string
  destaque: boolean
  imagem: string
  pratos: Prato[]
}
