import React, { useState } from "react"
import ColorsDisplay from "./ColorsDisplay"
import "./Main.css"
import ColorCategory from "./ColorCategory"

const Main = () => {
  const [category, setCategory] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const filters = ["red", "yellow", "green", "aqua", "blue", "magenta"]

  return (
    <>
      <main>
        <ColorCategory
          filters={filters}
          setCategory={setCategory}
          setCurrentPage={setCurrentPage}
        />
        <ColorsDisplay
          category={category}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </main>
    </>
  )
}

export default Main
