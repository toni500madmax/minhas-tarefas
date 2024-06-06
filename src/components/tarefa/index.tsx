import React from 'react'
import * as S from './styles'

export const Tarefa = () => {
  return (
    <S.Card>
      <S.Title>Nome da tarefa</S.Title>
      <S.Tag>Importante</S.Tag>
      <S.Tag>Pendente</S.Tag>
      <S.Description />
      <S.BarraAcoes>
        <S.Button>Editar</S.Button>
        <S.Button>Remover</S.Button>
      </S.BarraAcoes>
    </S.Card>
  )
}
