import React, { useState } from 'react'
import {colorToHue} from '../../utils/colorTransformations'

const ColorCategory = ({ filters, setCategory, setCurrentPage, setHue, hue, setAngleFromCategory }) => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleFilterChange = (filter) => {
    const newFilter = selectedFilter === filter ? null : filter;
    setSelectedFilter(newFilter)
    setCategory(newFilter)
    setCurrentPage(1)
    if (newFilter) {
      setHue(colorToHue[newFilter])
      setAngleFromCategory(colorToHue[newFilter])
    }
  };


  return (
    <div className='main-left-section'>
      <div className="filter">
        <div className="filter-content">
          <h1>Filter</h1>
          <div className='color-filter-container'>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {filters.map((filter) => (
                <li key={filter}>
                    <input
                      className={`${filter} color-pick`}
                      style={{backgroundColor: `hsl(${colorToHue[filter]}, 50%, 50%)`}}
                      type="radio"
                      checked={selectedFilter === filter}
                      onClick={() => handleFilterChange(filter)}
                      readOnly
                    />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-box-category">
        <div className="bgbox"></div>
        <div className="bgbox"></div>
      </div>
    </div>
  )
}

export default ColorCategory