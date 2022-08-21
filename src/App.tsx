import { useSelector } from "react-redux";
import type { RootState } from './redux/store'
import Header from "./components/Header";
import GlobalStyle from "./globalStyle";


function App() {

  const products = useSelector((state: RootState) => state.products)

  console.log(products)

  return (
    <>
    <GlobalStyle theme='light'/>
    <Header/>
    </>
  );
}

export default App;
