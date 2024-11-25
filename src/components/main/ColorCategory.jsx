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
    <div className="filter">
      <div className="filters-label">Filter</div>
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
  )
}

export default ColorCategory