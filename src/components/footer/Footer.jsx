import ColorSelector from './ColorSelector'
import Palette from './Palette';
import './Footer.css'

const Footer = ({ hue, setHue, angleFromCategory }) => {
  return (
    <footer>
      <ColorSelector hue={hue} setHue={setHue} angleFromCategory={angleFromCategory}/>
      <Palette hue={hue}/>
    </footer>
  )
}

export default Footer