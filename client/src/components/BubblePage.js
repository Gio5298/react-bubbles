import React, { useState, useEffect } from "react";
import axiosAuth from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() =>{
    getData()
  }, []);


  const getData = () => {
    axiosAuth()
      .get('/colors')
      .then(res =>{
        setColorList(res.data);
      })
      .catch(err =>{
        console.log(err)
      })
  };

  console.log(colorList);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
