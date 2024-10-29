import './App.css'
import Spacer from './components/Spacer'
import Header from './layout/Header'
import MainContainer from './layout/MainContainer'

function App() {
  return (
    <>
      <Header></Header>
      <Spacer height={48}></Spacer>
      <MainContainer></MainContainer>
    </>
  )
}

export default App
