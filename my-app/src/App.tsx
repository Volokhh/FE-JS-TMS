import { Title } from "./components/title/title"
import { Burger } from "./components/burger/burger"
import { useState } from "react";

function App() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <>
         <Title title="Sign in" />
         <Burger variant={isOpen ? 'cross' : 'lines'}
            onClick={() => setIsOpen(!isOpen)} />
      </>
   )
}

export default App
