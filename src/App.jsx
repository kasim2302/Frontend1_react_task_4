import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cards from './components/Cards'
import Navbar from './components/Navbar'
import Nullish_operator from './components/Nullish_operator'
import Home_page from './pages/Home_page'
import State_Assignment from './pages/State_Assignment'
import Task from './components/Task'
import ParentProps from './components/ParentProps'

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
            <Route path='/props' element={<ParentProps/>}/>





            
          </Routes>
        </main>
       
      </div>
    </>
  )
}

export default App