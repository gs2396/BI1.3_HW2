import './App.css'
import Hotels from './components/Hotels'
import HotelByName from './components/HotelByName'
import AddNewHotelForm from './components/AddNewHotelForm'

function App() {
  return (
    <>
    <AddNewHotelForm />
    <Hotels />
    <HotelByName name="Sunset Resort"/>
    </>
  )
}

export default App
