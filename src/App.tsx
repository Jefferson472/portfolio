import './App.css'
import Spacer from './components/Spacer'
import FloatContacts from './layout/FloatContacts'
import Header from './layout/Header'
import MainContainer from './layout/MainContainer'

function App() {
  return (
    <>
      <FloatContacts></FloatContacts>
      <Header></Header>
      <Spacer height={48}></Spacer>
      <MainContainer></MainContainer>
    </>
  )
}

export default App
