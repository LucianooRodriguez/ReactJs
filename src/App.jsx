import NavBar from "./componentes/NavBar/NavBar"
import './App.css'
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"¡Bienvenidos a la tienda donde encontras lo que vos queres!"}/>
    </div>
  )
}

export default App