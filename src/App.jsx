import React, { useState } from 'react'
import Footer from "./components/footer/Footer";
import './App.css'
import Main from "./components/main/Main";
import Header from "./components/header/Header";

const App = () => {
  const [hue, setHue] = useState(0);
  const [angleFromCategory, setAngleFromCategory] = useState(0)

  return (
    <>
      <Header />
      <Main 
        setHue={setHue}
        hue={hue}
        setAngleFromCategory={setAngleFromCategory}
      />
      <Footer 
        hue={hue} 
        setHue={setHue}
        angleFromCategory={angleFromCategory}
      />
    </>
  )
}

export default App;  