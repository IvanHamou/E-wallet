import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Registration from './views/Registration';
import Account from './views/Account';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/addcard',
    element: <AddCard />
  }
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={ router } />
    </div>
  )
}

export default App
