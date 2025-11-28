import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cards from './components/Cards'
import Navbar from './components/Navbar'
import Nullish_operator from './components/Nullish_operator'
import Home_page from './pages/Home_page'
import State_Assignment from './pages/State_Assignment'
import Task from './components/Task'
import ParentProps from './components/ParentProps'
import InstituteForm from './components/InstituteForm'
import ShowFeedback from './components/ShowFeedback'

const App = () => {
  return (
    <>
      <div className='App'>
        <Navbar/>
        <main>
          <Routes>
            <Route path='/' element={<Home_page/>}/>
            <Route path='/cast' element={<Cards/>}/>
            {/* <Route path='/task' element={<Task/>}/> */}
            <Route path='/forms' element={<InstituteForm/>}/>
            <Route path='/states' element={<State_Assignment/>}/>
            <Route path='/props' element={<ParentProps/>}/>
            {/* <Route path='/forms' element={<InstituteForm/>}/> */}
            <Route path='/formdatas' element={<ShowFeedback/>}/>







            
          </Routes>
        </main>
       
      </div>
    </>
  )
}

export default App