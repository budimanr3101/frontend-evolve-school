import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import burger from '../assets/burger.svg';
import './Navigasi.css';


import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button,
    Container,
   } from 'reactstrap';

  import { Link } from 'react-router-dom'

  import axios from 'axios';

export class Navigasi extends Component {
  constructor(props){
    super(props);
    this.state = {
        features:[],
       
    }
  }
  
  componentDidMount(){
    axios.get('https://backend-evolve.herokuapp.com/features')
    .then(response => {
        console.log(response);
        this.setState({
            features: response.data.data
        })
    }).catch(err => {
        console.log(err);
    });
  }
  
  render() {
    return (
      <div>
        
          <Navbar id="navigasi" expand="md">
            <Container>
              <img src={burger} alt="burger"/> &nbsp; 
              <Link to='/'>
                <img src={logo} alt="logo-traveloka"/>
              </Link>
              
              <NavbarToggler  />
              <Collapse  navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <Button className='navigasi' outline color='danger'>Login</Button>
                    <Link to='/profile'>
                      <Button className='navigasi' outline color='primary'>Profile</Button>
                    </Link>             
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          <Navbar id="sub-navbar">
            <Container>
              <Nav>
              { this.state.features.map((feature) =>
               <NavItem key={feature.id}>
               <div className="logo" dangerouslySetInnerHTML={{__html:feature.icon}}></div>
               &nbsp; <a href={feature.path}>{feature.features_name}</a>
               </NavItem>) 
              }
              
              </Nav>
            </Container>
          </Navbar>
        
          
        

        
      </div>
    )
  }
}

export default Navigasi
