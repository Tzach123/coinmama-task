import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CryptoListScreen from './screens/cryptoList/CryptoListScreen'
import CryptoHistoryScreen from './screens/cryptoHistory/CryptoHistoryScreen'
import Header from './components/common/header/Header'
import Footer from './components/common/footer/Footer'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path='/' component={CryptoListScreen} exact />
        <Route path='/cryptolist' component={CryptoListScreen} />
        <Route path='/cryptohistory' component={CryptoHistoryScreen} exact />
        <Route path='/cryptohistory/:symbol' component={CryptoHistoryScreen} />
      </main>
      <Footer />
    </Router>
  )
}

export default App
