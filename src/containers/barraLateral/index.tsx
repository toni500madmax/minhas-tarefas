import React from 'react'
import FiltroCard from '../../components/filtroCard'
import * as S from './styles'

export default function BarraLateral() {
  return (
    <S.Aside>
      <div>
        <S.Campo type="text" placeholder="Buscar" />
        <S.Filtros>
          <FiltroCard legenda="pendentes" contador={3} />
          <FiltroCard legenda="concluídas" contador={2} />
          <FiltroCard legenda="urgentes" contador={7} />
          <FiltroCard legenda="importantes" contador={4} />
          <FiltroCard legenda="normal" contador={1} />
          <FiltroCard legenda="todas" contador={17} ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}
