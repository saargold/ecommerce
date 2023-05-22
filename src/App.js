import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import ProductScreen from './screens/ProductScreen';
function App() {
  return (
    <ChakraProvider>
      <Router>
        <NavBar/>
        <main>
        <Routes>
        <Route path='/products' element={<ProductScreen/>}></Route>
        </Routes>

        </main>
      </Router>
    </ChakraProvider>

  );
}

export default App;
