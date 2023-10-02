import React from "react";

class CartItem extends React.Component {
    
    constructor(){
        super();
        this.state = {
            title : 'Phone',
            price : 999,
            qty : 1,
            img : '' 
        }
    }

    increaseQuantity = ()=>{
        this.state.qty++;
        console.log(this.state.qty);
    }

    render(){
        const {title, price, qty} = this.state;
        return (
            <div className='cart-item'>
                <div className='.left-block'>
                    <img style={ Style.image} />
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
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/181/181667.png"
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/10147/10147931.png "
                        />
                    </div>
                </div>
            </div>
        );
    }
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