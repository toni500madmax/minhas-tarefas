import { Provider } from 'react-redux'
import BarraLateral from './containers/barraLateral'
import ListaDeTarefas from './containers/listaDeTarefas'
import { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </Provider>
  )
}

export default App
