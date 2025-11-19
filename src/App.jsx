import './App.css'
import Banner from './components/Banner'
import Cards from './components/Cards'
import Navbar from './components/Navbar'
import Nullish_operator from './components/Nullish_operator'
import Tables from './components/Tables'
import Ternary_operator from './components/Ternary_operator'

const App = () => {
  return (
    <>
      <div>
        <Navbar/>
        <Banner/>
         <Cards/>
        <Ternary_operator/>
        <Nullish_operator/>
        <Tables/>
       
      </div>
    </>
  )
}

export default App