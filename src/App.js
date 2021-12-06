// import useState
import React, { useState } from 'react';
import './styles.css';
import AllTheThings from './components/AllTheThings';
import MyShoppingCart from './components/MyShoppingCart';
import Form from './components/Form';
import productsArr from './products';
import ShoppingItems from './components/ShoppingItems';

export default function App() {
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);

  const allThings = productsArr.map((element, index)=>{
    return(
    <ShoppingItems
    name={element.name}
    price={element.price}
    key={index}
    handleClick={()=>addToCart(element)}
    />
    )
  })

  const myThings = cart.map((element, index)=>{
    return(
    <ShoppingItems
    name={element.name}
    price={element.price}
    key={index}
    handleClick={()=>removeFromCart(index)}
    />
    )
  })
  // create an addToCart function that takes in a product as a param 
  // using the ...spread operator add the product to the cart array

  function addToCart(product){
    console.log(product)
    return(
      setCart([...cart, product])
    )
  }
  function removeFromCart(index){
    let newCart = cart.filter((item, itemIdx) => {
      // console.log('index to remove', idx)
      // console.log('item indx', itemIdx)
      return index !== itemIdx
    })
    console.log('New Cart:', newCart)
    setCart(newCart)
  }

  // create an removeFromCart function that takes in an index as a param
  // using Array.filter remove create a new array where that item is removed

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <Form />
      <div className="products">
        <AllTheThings things={allThings}/>
        <MyShoppingCart myThings={myThings}/>
      </div>
    </div>
  );
}
