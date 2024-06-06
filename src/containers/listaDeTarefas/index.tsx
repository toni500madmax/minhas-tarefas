import React from 'react'
import { Tarefa } from '../../components/tarefa'
import * as S from './styles'

export default function ListaDeTarefas() {
  return (
    <main>
      <S.Container>
        <ul>
          <li>
            <Tarefa />
          </li>
          <li>
            <Tarefa />
          </li>
          <li>
            <Tarefa />
          </li>
          <li>
            <Tarefa />
          </li>
          <li>
            <Tarefa />
          </li>
        </ul>
      </S.Container>
    </main>
  )
}
