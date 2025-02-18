import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import {colorsData} from '../../data/colorsData'

const ColorsDisplay = ({ category, currentPage, setCurrentPage }) => {
  // const [colorsData, setColorsData] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch('../../data/colors.json')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Ошибка при чтении файла!');
  //       }
  //       return response.json();
  //     })
  //     .then(data => setColorsData(data))
  //     .catch(error => setError(error.message));
  // }, []);

  // if (error) {
  //   return <div>Ошибка: {error}</div>;
  // }


  const itemsPerPage = 9;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  let filteredItems = colorsData

  if(category){
    filteredItems = colorsData.filter(palette => palette.mainColor === category)
  }

  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // useEffect(() => {
  //   navigator.permissions.query({ name: "clipboard-write" })   
  // }, [])
  
  
  function copyText(textToCopy) {
    navigator.clipboard.writeText(textToCopy)
  }

  return (
    <div className="page-container">
      <div id="colors-container">
        {currentItems.map((item, index) => (
          <div className="palette-container" key={index}>
            <div 
            className="box" 
            style={{ backgroundColor: item.color1 }}
            onClick={() => copyText(item.color1)}
            >
              <span style={{color: item.color5}}>{item.color1}</span>
            </div>
            <div 
            className="box" 
            style={{ backgroundColor: item.color2 }}
            onClick={() => copyText(item.color2)}
            >
              <span style={{color: item.color5}}>{item.color2}</span>
            </div>
            <div 
            className="box" 
            style={{ backgroundColor: item.color3 }}
            onClick={() => copyText(item.color3)}
            >
              <span style={{color: item.color1}}>{item.color3}</span>
            </div>
            <div 
            className="box" 
            style={{ backgroundColor: item.color4 }}
            onClick={() => copyText(item.color4)}
            >
              <span style={{color: item.color1}}>{item.color4}</span>
            </div>
            <div 
            className="box" 
            style={{ backgroundColor: item.color5 }}
            onClick={() => copyText(item.color5)}
            >
              <span style={{color: item.color1}}>{item.color5}</span>
            </div>
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
  );
};

export default ColorsDisplay;
