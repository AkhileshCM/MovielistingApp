import React from 'react';
import {MdHome,MdTheaters} from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import {PiTelevisionBold} from "react-icons/pi";
import {GiWireframeGlobe} from "react-icons/gi";
import {MdFavoriteBorder} from 'react-icons/md';
import {VscAccount} from 'react-icons/vsc';
import {MdSubscriptions} from 'react-icons/md';
import './Navbarcss.css';
function NavbarSide(props) {
    const n=useNavigate()
    const navigate=()=>{
        n('/favourites')
    }
    const nav=useNavigate()
    const navigate2=()=>{
        nav("/account")

    }
    const nav3=useNavigate()
    const tohome=()=>{
           nav3("/home")
    }

    return (
        <div className='sidenav'>
            <div className='logo'>
                <img className="filmylogo" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT-MQePzPRdHivtV7cpcCLIyigupdzqMxRUqxSlz0rPxtQFHW2Q"
    >
        <p className="filmyname">FILMY TV</p>
        
            </div>
            <div className='links'>
              
                <ul>
                    <li>
                        <i onClick={tohome} id='hhh'  for="home">
                                <MdHome/>
                                
                        </i>
                        <Link id='home' className='linkto' to="/">Home</Link>
                        
                    </li>
                    <li>
                        <i for="movies">
                                <MdTheaters/>
                                
                        </i>
                        <Link id='movies' className='linkto' to="/movies">Movies</Link>
                        
                    </li>
                    <li>
                        <i for="shows">
                                <PiTelevisionBold/>
                                
                        </i>
                        <Link to="/shows" className='linkto'>TV Shows</Link>
                        
                    </li>
                    <li>
                        <i for="series">
                                <GiWireframeGlobe/>
                                
                        </i>
                        <Link to="/" className='linkto'>Series</Link>
                        
                    </li>
                    <li>
                        <i onClick={navigate} for="fav">
                                <MdFavoriteBorder/>
                                
                        </i>
                        <Link id='fav' to="/favourites" className='linkto'>Favourites</Link>
                        
                    </li>
                </ul>
                <div className='sidefooter'>
                    
                    <ul>
                        <li>
                        <i onClick={navigate2} for="series">
                                <VscAccount/>
                                
                        </i>
                        <Link to="/account" className='linkto'>Account</Link>

                        </li>
                        <li>
                        <i for="series">
                                <MdSubscriptions/>
                                
                        </i>
                        <Link to="/" className='linkto'>Subscription</Link>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavbarSide;
