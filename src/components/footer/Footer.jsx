import React, { useState } from "react"
import ColorSelector from "./ColorSelector"
import Palette from "./Palette"
import "./Footer.css"

const Footer = () => {
  const [hue, setHue] = useState(90)

  return (
    <footer>
      <ColorSelector hue={hue} setHue={setHue} />
      <Palette hue={hue} />
    </footer>
  )
}

export default Footer
