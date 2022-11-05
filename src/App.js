import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import AboutIconLink from './components/AboutIconLink'
import Header from './components/Header'
import FeedbackListComponent from './components/FeedbackListComponent'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './components/pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'

const App = () => {

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackListComponent />
                </>
              }
            />
            <Route path='/about' element={<AboutPage />} />


          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App