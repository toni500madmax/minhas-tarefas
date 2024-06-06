import BarraLateral from './containers/barraLateral'
import ListaDeTarefas from './containers/listaDeTarefas'
import { Container } from './styles'

function App() {
  return (
    <div>
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </div>
  )
}

export default App
