import React, { useState, useEffect } from "react"
import Pagination from "./Pagination"
import { colorsData } from "../../data/colorsData"

const ColorsDisplay = ({ category, currentPage, setCurrentPage }) => {
  const itemsPerPage = 9

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  let filteredItems = colorsData

  if (category) {
    filteredItems = colorsData.filter(
      (palette) => palette.mainColor === category
    )
  }

  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  function copyText(textToCopy) {
    navigator.clipboard.writeText(textToCopy)
  }

  return (
    <div className="page-container">
      <div id="colors-container">
        {currentItems.map((item, index) => (
          <div className="palette-container" key={index}>
            {[
              item.color1,
              item.color2,
              item.color3,
              item.color4,
              item.color5,
            ].map((color, i) => (
              <div
                className="box"
                key={i}
                style={{ backgroundColor: color }}
                onClick={() => copyText(color)}
                aria-label={`Copy color ${color}`}
              >
                <span style={{ color: item.color1 }}>{color}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="pagination">
        <Pagination
          totalItems={filteredItems.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  )
}

export default ColorsDisplay
