import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllNews from './components/AllNews'
import TopHeadlines from './components/TopHeadlines'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AllNews />} />
        <Route path="/top-headlines/:category" element={<TopHeadlines />}/>
      </Routes>
      <Footer />
    </BrowserRouter >
  )
}

export default App
