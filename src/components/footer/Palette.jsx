import React, { useMemo, useEffect } from "react"
import "./Palette.css"
import { hslToHex } from "../../utils/colorTransformations.js"

const Palette = ({ hue }) => {
  const colors = useMemo(
    () => [
      { offset: 3, saturation: 20, lightness: 20 },
      { offset: 357, saturation: 18, lightness: 32 },
      { offset: 0, saturation: 20, lightness: 50 },
      { offset: 364, saturation: 30, lightness: 70 },
      { offset: 364, saturation: 40, lightness: 80 },
    ],
    []
  )

  const computedColors = useMemo(() => {
    return colors.map(({ offset, saturation, lightness }) => {
      const adjustedHue = (hue + offset) % 360
      const hex = hslToHex(adjustedHue, saturation, lightness).join("")
      return {
        hsl: `hsl(${adjustedHue}, ${saturation}%, ${lightness}%)`,
        hex: `#${hex}`,
      }
    })
  }, [hue, colors])

  useEffect(() => {
    updateRootColors({
      "--text-color": computedColors[0].hsl,
      "--shadow-color": computedColors[1].hsl,
      "--background-color": computedColors[2].hsl,
      "--main-color": computedColors[3].hsl,
      "--light-color": computedColors[4].hsl,
    })
  }, [hue])

  function copyText(textToCopy) {
    navigator.clipboard.writeText(textToCopy)
  }

  return (
    <div className="analogous-colors-container">
      {computedColors.map((color, index) => (
        <div
          key={index}
          className={`color${index + 1} color-box`}
          style={{ backgroundColor: color.hsl }}
          onClick={() => copyText(color.hex)}
        >
          <span>{color.hex}</span>
        </div>
      ))}
    </div>
  )
}

function updateRootColors(newColors) {
  const root = document.documentElement
  Object.entries(newColors).forEach(([key, value]) => {
    root.style.setProperty(key, value)
  })
}

export default Palette
