
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Context } from './components/Context/Context'


function App() {

  return (
<Context>
<BrowserRouter>
<Routes>
  <Route path='/' element={<ItemListContainer/>} />
  <Route path='/category/:category' element={<ItemListContainer/>} />
</Routes>

</BrowserRouter>
</Context>
  )
}
export default App
