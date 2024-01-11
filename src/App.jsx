import '../src/styles/main.sass'
import Header from './components/header/Header'
import Services from './components/main/services/Services'
import About from './components/main/about/About'
import Briefs from './components/main/briefs/Briefs'

function App() {
  return (
    <>
    <Header />
    <main className="main">
        <Services />
        <About /> 
        <Briefs />
    </main>
    </>
  )
}

export default App
