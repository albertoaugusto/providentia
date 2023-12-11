import '../src/styles/main.sass'
import Header from './components/header/Header'
import Services from './components/main/services/Services'

function App() {
  
  return (
    <>
    <Header />
    <main className="main">
      <section className='sections'>
          <Services />
      </section>
    </main>
    </>
  )
}

export default App
