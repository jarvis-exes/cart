import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import {db} from './firebase';
import { collection, doc , onSnapshot, query, addDoc, updateDoc, deleteDoc } from "firebase/firestore";



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

  handleIncreaseQuantity = async (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);
      const id =   products[index].id;

      const docRef = doc(db, "products", id);

      await updateDoc(docRef, {
        qty: products[index].qty + 1
      });
  }

  handleDecreaseQuantity = async (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);
      const id =   products[index].id;

      const docRef = doc(db, "products", id);

      if(products[index].qty === 0){
        return;
      }
      await updateDoc(docRef, {
        qty: products[index].qty - 1
      });
  }

  handleDeleteProduct = async (id)=>{
      const {products} = this.state;

      await deleteDoc(doc(db, "products", id));      
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

  addProduct = async ()=>{
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "products"), {
      title: "Laptop",
      qty: 1,
      price: 79999,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuQ5er-A2kiwnHCcZ3M2COQn-eLwthDSxm2w&usqp=CAU"
    });

    console.log("Document written with ID: ", docRef.id);
  }

  render(){
    const {products, loading} = this.state;
  
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()} />
        <button onClick={this.addProduct} style={{padding: 8, fontSize: 20, margin: 10}}>Add Product</button>       
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
