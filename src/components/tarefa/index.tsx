import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { editar, remover } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'

export type Props = TarefaClass

export const Tarefa = ({
  titulo,
  prioridade,
  status,
  descricao: descricaoOriginal,
  id
}: Props) => {
  const [edit, setEdit] = useState(false)
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescription(descricaoOriginal)
    }
  }, [descricaoOriginal])

  const cancelarEdicao = () => {
    setEdit(false)
    setDescription(descricaoOriginal)
  }

  const salvarEdicao = () => {
    dispatch(
      editar({
        id,
        titulo,
        prioridade,
        status,
        descricao: description
      })
    )
    setEdit(false)
  }

  return (
    <S.Card>
      <S.Title>{titulo}</S.Title>
      <S.Tag parametro={'prioridade'} prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro={'status'} status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!edit}
        value={description}
        onChange={(evento) => setDescription(evento.target.value)}
      />
      <S.BarraAcoes>
        {edit ? (
          <>
            <S.SaveButton onClick={salvarEdicao}>Salvar</S.SaveButton>
            <S.NegativeButton onClick={cancelarEdicao}>
              Cancelar
            </S.NegativeButton>
          </>
        ) : (
          <>
            <S.Button onClick={() => setEdit(true)}>Editar</S.Button>
            <S.NegativeButton onClick={() => dispatch(remover(id))}>
              Remover
            </S.NegativeButton>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}
