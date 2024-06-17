import { Provider } from 'react-redux'
import { Container } from './styles'
import store from './store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <h1>Nova tarefa</h1>
  }
])

function App() {
  return (
    <Provider store={store}>
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </Provider>
  )
}

export default App
