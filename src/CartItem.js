import React from "react";

const CartItem = (props)=>{ 

    // increaseQuantity = ()=>{
    //     //Set State form 1
    //     this.setState({
    //         qty : this.state.qty + 1
    //     })

    //     //Set State form 2 - if previous state required use this method
    //     // this.setState((prevState) => {
    //     //     return{
    //     //         qty : prevState.qty + 1
    //     //     }
    //     // })
    // };

    // decreaseQuantity = ()=>{
    //     {if(this.state.qty>0){
    //         this.setState({
    //             qty : this.state.qty - 1
    //         })
    //     }}
    // }

    const {title, price, qty, img} = props.product;
    const {product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct} = props;
    return (
        <div className='cart-item'>
            <div className='.left-block'>
                <img style={ Style.image} src={img} alt="product"/>
            </div>
            <div className="right-block">
                <div style={ {fontSize: 25} }>{title}</div>
                <div style={ {color:'#777'} }>Rs. {price}</div>
                <div style={ {color:'#777'} }>Quantity : {qty}</div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                    <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/3416/3416075.png"
                        onClick={()=>{onIncreaseQuantity(product)}}
                    />
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/181/181667.png"
                        onClick={()=>{onDecreaseQuantity(product)}}
                    />
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/10147/10147931.png "
                        onClick={()=>{onDeleteProduct(product.id)}}
                    />
                </div>
            </div>
        </div> 
    );
}

const Style = {
    image : {
        height : 110,
        width : 110,
        borderRadius : 4,
        backgroundColor : 'grey'
    }
}
export default CartItem;