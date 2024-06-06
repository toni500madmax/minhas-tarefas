import React from 'react'
import { Tarefa } from '../../components/tarefa'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Estudar typescript',
    descricao: 'Ver a aula 30 da EBAC',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Estudar Javascript',
    descricao: 'Ver a aula 10 da EBAC',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Pagar conta',
    descricao: 'Conta de 100 reais',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Ir ao mercado',
    descricao: 'Comprar café',
    prioridade: enums.Prioridade.NORMAL,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Responder Mamãe',
    descricao: 'Se irei para Curitiba',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  }
]

export default function ListaDeTarefas() {
  return (
    <main>
      <S.Container>
        <ul>
          {tarefas.map((tarefa) => (
            <li key={tarefa.titulo}>
              <Tarefa
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
