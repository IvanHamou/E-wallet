import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './views/Home';
import AddCard from './views/AddCard';

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
