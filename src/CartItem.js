import React from "react";

class CartItem extends React.Component {
    render(){
        return (
            <div className='cart-item'>
                <div className='.left-block'>
                    <img style={ Style.image} />
                </div>
                <div className="right-block">
                    <div style={ {fontSize: 25} }>price</div>
                    <div style={ {color:'#777'} }>Rs 999</div>
                    <div style={ {color:'#777'} }>Oty :1</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
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