import React from "react";
import { useState } from 'react';


function Item({ name, category }) {

  const[bought, setBought] = useState([])
  return (
    <div>
      <li className="">
        <span>{name}</span>
        <span className="category">{category}</span>
        <button className="add" onclick = {setBought(item.name)}>Add to Cart</button>
      </li>

      <li className="in-cart">
      {bought}
      </li>

      <li className="">
      {/* the item is NOT in the cart */}
      </li>
      </div>

  );




}

export default Item;
