import { useState } from 'react'
import Landing from './pages/Landing.jsx'
import Hehe from './pages/hehe.jsx'
import Prediction from './pages/prediction.jsx'

function App() {
  const [view, setView] = useState('landing')

  if (view === 'prediction') {
    return (
      <Prediction
        onRestart={() => setView('landing')}
        onBack={() => setView('hehe')}
      />
    )
  }

  if (view === 'hehe') {
    return (
      <Hehe
        onBack={() => setView('landing')}
        onNext={() => setView('prediction')}
      />
    )
  }

  return <Landing onRead={() => setView('hehe')} />
}

export default App