import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { alteraFiltro } from '../../store/reducers/filtro'
import * as enums from './../../utils/enums/Tarefa'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
  termo?: string
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  const verificaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor
    return mesmoCriterio && mesmoValor
  }

  const filtrar = () => {
    dispatch(alteraFiltro({ criterio, valor }))
  }

  const ativo = verificaAtivo()

  const contarTarefas = () => {
    if (criterio === 'todas') return tarefas.itens.length
    else if (criterio === 'prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    } else if (criterio === 'status') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
  }

  const contador = contarTarefas()

  return (
    <S.Card onClick={filtrar} ativo={ativo}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
