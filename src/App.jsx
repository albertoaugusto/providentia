import '../src/styles/main.sass'
import Header from './components/header/Header'
import Services from './components/main/services/Services'
import About from './components/main/about/About'
import Briefs from './components/main/briefs/Briefs'
import Form from './components/main/form/Form'

function App() {
  return (
    <>
    <Header />
    <main className="main">
        <Services />
        <About /> 
        <Briefs />
        <Form />
    </main>
    </>
  )
}

export default App
