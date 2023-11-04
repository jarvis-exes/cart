import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase'
// import {db}  from './index'

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
        products :  []
    }
  }

  componentDidMount(){
    firebase
    .firestore()
    .collection('products')
    .get()
    .then((snapshot)=>{
      console.log(snapshot);
    })
  }

  handleIncreaseQuantity = (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);
      
      products[index].qty += 1;

      this.setState({
          products : products
      })
  }

  handleDecreaseQuantity = (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);
      
      if(products[index].qty === 0){
          return;
      }

      products[index].qty -= 1;

      this.setState({
          products : products
      })
  }

  handleDeleteProduct = (id)=>{
      const {products} = this.state;

      const items = products.filter((item)=> item.id !== id );

      this.setState({
          products:items
      })
  }

  getCartCount = ()=>{
    const {products} = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });
    console.log(count);
    return count;

  }

  getCartTotal = ()=>{
    const {products} = this.state;
    let count = 0;

    products.map((product)=>{
      count = count + product.price*product.qty;
    })

    return count;
  }

  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()} />
        <Cart
          products = {products} 
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />
        <div style={{padding: 10, fontSize: 20 }}>
        TOTAL: {this.getCartTotal()}
        </div>
      </div>
    );
  } 
}

export default App;
