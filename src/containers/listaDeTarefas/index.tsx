import React, { useState } from 'react'
import { Tarefa } from '../../components/tarefa'
import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

export default function ListaDeTarefas() {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      }
      if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }
      return tarefasFiltradas
    } else {
      return itens
    }
  }

  return (
    <main>
      <S.Container>
        <p>
          Tarefas marcadas como: &quot;{criterio}
          &quot; e &quot;{termo}
          &quot;
        </p>
        <ul>
          {filtraTarefas().map((tarefa) => (
            <li key={tarefa.titulo}>
              <Tarefa
                id={tarefa.id}
                titulo={tarefa.titulo}
                descricao={tarefa.descricao}
                prioridade={tarefa.prioridade}
                status={tarefa.status}
              />
            </li>
          ))}
        </ul>
      </S.Container>
    </main>
  )
}
