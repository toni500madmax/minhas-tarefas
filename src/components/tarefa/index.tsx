import React, { useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'

export type Props = {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
}

export const Tarefa = ({ titulo, prioridade, status, descricao }: Props) => {
  const [edit, setEdit] = useState(false)

  return (
    <S.Card>
      <S.Title>{titulo}</S.Title>
      <S.Tag parametro={'prioridade'} prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro={'status'} status={status}>
        {status}
      </S.Tag>
      <S.Description value={descricao} />
      <S.BarraAcoes>
        {edit ? (
          <>
            <S.SaveButton>Salvar</S.SaveButton>
            <S.NegativeButton onClick={() => setEdit(false)}>
              Cancelar
            </S.NegativeButton>
          </>
        ) : (
          <>
            <S.Button onClick={() => setEdit(true)}>Editar</S.Button>
            <S.NegativeButton>Remover</S.NegativeButton>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}
