import React from 'react'
import Header from './Header'
import Feed from './Feed'
import Footer from './Footer'


const Home = () => {
  return (
    <div className="container">
      <div className="main">
        <Header />
        <Feed />
        <Footer />
      </div>
    </div>
  )
}

export default Home