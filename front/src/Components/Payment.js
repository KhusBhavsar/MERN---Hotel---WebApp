import React from 'react'
import './style.css'
import CartContext from '../context/Context';
import { useContext } from 'react';
import { FaTrash } from 'react-icons/fa'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Payment = () => {

    const { items, removeFromCart } = useContext(CartContext);

    return (
        <div className="body1"> <br /><br />
            <div className="contactJoin" style={{ paddingTop: "10px" }}> <br />
                <div className="display" style={{ margin: "0 auto", width: "40%",padding: "20px" }}>
                    <h1 style={{ textAlign: "center" }}>Item Summary</h1>
                    <div className="itemList" style={{color:"white"}}>
                        {
                            items.map(item => (
                                <>
                                    <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                        <span>{item.name}</span>
                                        <FaTrash
                                            style={{ marginLeft: '10px', cursor: 'pointer' }}
                                            onClick={() => removeFromCart(item.name)}
                                        />
                                    </div> <hr />
                                </>

                            ))
                        }
                    </div>
                    <Button style={{ width: "100%", boxShadow:" rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px" }} variant="outline-light"  block>
                        <Link to={"/Payment"}>Proceed To Pay</Link>
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default Payment
