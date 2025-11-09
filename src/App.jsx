import Item from "./components/Item"
import items from './data/item'

function App() {

  return (
   <div className="mx-auto my-44 max-w-xl p-5 shadow-md bg-white">
      <Item 
        items = {items}
      />
   </div>
  )
}

export default App
