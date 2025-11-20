import { Route, Routes } from 'react-router-dom'
import './App.css'
import Banner1 from './components/Banner1'
import Banner from './components/Banner'
import Cards from './components/Cards'
import Navbar from './components/Navbar'
import Nullish_operator from './components/Nullish_operator'
import Tables from './components/Tables'
import Ternary_operator from './components/Ternary_operator'
import Home_page from './pages/home_page'

const App = () => {
  return (
    <>
      <div className='App'>
        <Navbar/>
        <main>
          <Routes>
            <Route path='/' element={<Home_page/>}/>
            <Route path='/cast' element={<Cards/>}/>
            <Route path='/render' element={<Ternary_operator/>}/>
            <Route path='/practice' element={<Nullish_operator/>}/>



            
          </Routes>
        </main>
       
      </div>
    </>
  )
}

export default App