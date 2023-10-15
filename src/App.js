import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
        products :  [
            {
                title : 'Phone',
                price : 29999,
                qty : 2,
                img : 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
                id : 1 
            }, 
            {
                title : 'Watch',
                price : 999,
                qty : 3,
                img : 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
                id : 2 
            }, 
            {
                title : 'Laptop',
                price : 70000,
                qty : 1,
                img : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
                id : 3
            }     
        ]
    }
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

      const items = products.filter((item)=> item.id != id );

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
