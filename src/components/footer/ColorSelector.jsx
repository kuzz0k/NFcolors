import React, { useState, useRef, useEffect } from 'react';
import './ColorSelector.css'; // Добавьте CSS из вашего файла или настройте стили
import { hslToRgb, hslToHex } from '../../utils/colorTransformations.js';

const ColorSelector = ({ hue, setHue }) => {
  const rgbDisplayRef = useRef(null);
  const hexDisplayRef = useRef(null);
  const colorWheelRef = useRef(null);
  const selectorRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const rect = colorWheelRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const radius = centerX - 12;
    const radianAngle = (hue - 90) * (Math.PI / 180);

    selectorRef.current.style.left = `${radius * Math.cos(radianAngle) + centerX - 12}px`;
    selectorRef.current.style.top = `${radius * Math.sin(radianAngle) + centerY - 12}px`;
  }, [])


  const updateSelectorPosition = (x, y) => {
    const rect = colorWheelRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const dx = x - (rect.left + centerX);
    const dy = y - (rect.top + centerY);

    let angle = Math.atan2(dy, dx) * (180 / Math.PI);
    if (angle < 0) {
      angle += 360;
    }
    angle = (angle + 90) % 360;
    angle = Math.round(angle);

    const radius = centerX - 12;
    const radianAngle = (angle - 90) * (Math.PI / 180);
    


    selectorRef.current.style.left = `${radius * Math.cos(radianAngle) + centerX - 12}px`;
    selectorRef.current.style.top = `${radius * Math.sin(radianAngle) + centerY - 12}px`;

    setHue(angle);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateSelectorPosition(e.clientX, e.clientY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    const rgb_list = hslToRgb(hue, 20, 50);
    const hex_list = hslToHex(hue, 20, 50)


    rgbDisplayRef.current.innerText = `${rgb_list[0]}, ${rgb_list[1]}, ${rgb_list[2]}`;
    hexDisplayRef.current.innerText = `#${hex_list[0]}${hex_list[1]}${hex_list[2]}`;
  }, [hue])
  


  return (
    <div className="select-color-content">
      <div className="color-wheel-container" ref={colorWheelRef}>
        <div
          className="selector"
          ref={selectorRef}
          onMouseDown={handleMouseDown}
          style={{ backgroundColor: `hsl(${hue}, 50%, 50%)` }}
        ></div>
      </div>
      <div className="info">
        <div className="rgb">
          <h3>rgb</h3>
          <p ref={rgbDisplayRef}></p>
        </div>
        <div className="hex">
          <h3>hex</h3>
          <p ref={hexDisplayRef}></p>
        </div>
        <div className="hsl">
          <h3>hsl</h3>
          <p>{hue}, 20, 50</p>
        </div>
      </div>
    </div>
  );
};

export default ColorSelector;
