import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import {db} from './firebase';
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";



class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
        products :  [],
        loading : true
    }
  }

  // getDataFromDatabase = async ()=>{
  //   const querySnapshot = await getDocs(collection(db, "products"));
    
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, " => ", doc.data());

  //   });

  //   const products = querySnapshot.docs.map((doc)=>{
  //     const data =  doc.data();

  //     data['id'] = doc.id;
  //     return data;
  //   })

  //   this.setState({
  //     products,
  //     loading : false
  //   })

  // }

  getDataFromDatabase = async ()=>{
    const q = await query(collection(db, "products"));
    const unsubscribe = onSnapshot(q ,(querySnapshot)=>{
      
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
  
      const products = querySnapshot.docs.map((doc)=>{
        const data =  doc.data();
  
        data['id'] = doc.id;
        return data;
      })

      this.setState({
        products,
        loading : false
      })
      
    })
  }

  componentDidMount(){
    this.getDataFromDatabase()
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
    return count;

  }

  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;

    products.map(product => {
      if (product.qty > 0) {
        cartTotal = cartTotal + product.qty * product.price;
      }
      return "";
    });

    return cartTotal;
  };

  render(){
    const {products, loading} = this.state;
  
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()} />
        <Cart
          products = {products} 
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products</h1>}
        <div style={{padding: 10, fontSize: 20 }}>
        TOTAL: {this.getCartTotal()}
        </div>
      </div>
    );
  } 
}

export default App;
