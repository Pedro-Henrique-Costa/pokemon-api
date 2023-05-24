import { Outlet } from "react-router";
import Header from "./components/Header";

import { ChakraProvider } from "@chakra-ui/react";

function App() {

  return (
    <>
    <ChakraProvider>
      <Header/>
      <Outlet/>
    </ChakraProvider>
    </>
  )
}

export default App;