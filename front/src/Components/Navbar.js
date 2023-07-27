import React from 'react';
import './Navbar.css';
import './Login.css'
import Logo from './logo.jpg'
import { Link } from "react-router-dom";
import { Badge, Button, Dropdown, Nav } from 'react-bootstrap';
import { FaShoppingCart, FaTrash } from 'react-icons/fa'
import CartContext from '../context/Context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const { items, removeFromCart } = useContext(CartContext);
  const auth = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  
  const logout = () => {
    localStorage.clear();
    navigate('/SignUp');
  };

  

  return (
    <div className='mainNav'>
      {auth && auth.username ? (
        <>
          <nav className="nav-bar navbar navbar-expand-lg bg-body-tertiary">
          <div className="main">
              <img src={Logo} alt="" style={{ width: "50px", height: "50px", borderRadius: "50%", border: "2px solid gold", marginRight: '5px', marginLeft: "30px" }} />
              <Link className="navbar-brand" style={{ color: "whitesmoke" }} to="/">Resturs..</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item" style={{ margin: "0px 20px" }}>
                    <Link className="nav-link" style={{ color: "whitesmoke" }} to={"/Home"}>Home</Link>
                    </li>
                  <li className="nav-item" style={{ margin: "0px 20px" }}>
                    <Link className="nav-link" style={{ color: "whitesmoke" }} to={"/Menu"}>Order</Link>
                  </li>
                  <li className="nav-item" style={{ margin: "0px 20px" }}>
                    <Link className="nav-link" style={{ color: "whitesmoke" }} to={"/ContactUs"}>ContactUs</Link>
                  </li>
                  <li className="nav-item" style={{ margin: "0px 20px" }}>
                    <Link className="nav-link" style={{ color: "whitesmoke" }} to={"/JoinUs"}>JoinUs</Link>
                  </li>
                  <li className="nav-item" style={{ margin: "0px 20px" }}>
                    <button onClick={logout}>Log Out</button>
                  </li>
                </ul>
              </div>
            </div>
            <Nav>
              <Dropdown alignRight style={{ marginRight: '30px' }}>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  <FaShoppingCart color='white' fontSize="25px" />
                  <Badge bg="success">{items.length}</Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ minWidth: "370px" }}>
                {items.length === 0 ? (
                    <span style={{ padding: '10px' }}>Cart is Empty!</span>
                  ) : (
                    <>
                      {items.map(item => (
                        <Dropdown.Item key={item.name}>
                          <div style={{ display: 'flex', justifyContent: "space-between" }}>
                            <span>{item.name}</span>
                            <FaTrash
                              style={{ marginLeft: '10px', cursor: 'pointer' }}
                              onClick={() => removeFromCart(item.name)}
                            />
                          </div>
                        </Dropdown.Item>
                      ))}
                      <Dropdown.Divider />
                      <Dropdown.Item>
                        <Button style={{ width: "100%" }} variant="outline-info" block>
                          <Link to={"/Payment"}>Proceed</Link>
                        </Button>
                      </Dropdown.Item>
                    </>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </nav>
        </>
      ) : (
        <>
          <nav className="nav-bar navbar navbar-expand-lg bg-body-tertiary">
            <div className="leftest" style={{ display: "flex" }}>
              <img src={Logo} alt="" style={{ width: "50px", height: "50px", borderRadius: "50%", border: "2px solid gold", marginRight: '5px', marginLeft: "30px" }} />
              <p className="navbar-brand" style={{ color: "whitesmoke", margin: "5px" }} to="/">Resturs..</p>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse rightest" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item" style={{ margin: "0px 20px" }}>
                  <Link to={"/"}><button>LOG IN</button></Link>
                </li>
                <li className="nav-item" style={{ margin: "0px 20px" }}>
                  <Link to={"/SignUp"}><button>SIGN UP</button></Link>
                </li>
                </ul>
            </div>
          </nav>
        </>
      )}
    </div>
  )
}

export default Navbar;
