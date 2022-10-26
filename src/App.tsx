import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import About from './about/About'
import Homepage from './homepage/Homepage'
import './App.css'
import { Provider } from 'react-redux'
import ReduxComponent from './redux/ReduxComponent'
import exampleStore from './redux/boilerplate/store'

const App: React.FC<{}> = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage showTitle={false} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path="/redux" element={
            <Provider store={exampleStore}>
              <ReduxComponent />
            </Provider>
          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
