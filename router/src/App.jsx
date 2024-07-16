import './App.css'

import { Outlet } from 'react-router-dom'

// 5 - link entre páginas
import Navbar from './components/Navbar'
// search params
import SearchForm from './components/SearchForm'

function App() {

  return (
      <div className='App'>
        <Navbar />
        <SearchForm />
        <Outlet />
        <p>Footer</p>
      </div>
  )
}

export default App
