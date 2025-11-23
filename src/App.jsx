import { Route, Routes } from 'react-router-dom'
import './App.css'
import Banner1 from './components/Banner1'
import Banner from './components/Banner'
import Cards from './components/Cards'
import Navbar from './components/Navbar'
import Nullish_operator from './components/Nullish_operator'
import Tables from './components/Tables'
import Ternary_operator from './components/Ternary_operator'
import Home_page from './pages/Home_page'
import State_Assignment from './pages/State_Assignment'
import Task from './components/Task'

const App = () => {
  return (
    <>
      <div className='App'>
        <Navbar/>
        <main>
          <Routes>
            <Route path='/' element={<Home_page/>}/>
            <Route path='/cast' element={<Cards/>}/>
            <Route path='/task' element={<Task/>}/>
            <Route path='/practice' element={<Nullish_operator/>}/>
            <Route path='/states' element={<State_Assignment/>}/>




            
          </Routes>
        </main>
       
      </div>
    </>
  )
}

export default App