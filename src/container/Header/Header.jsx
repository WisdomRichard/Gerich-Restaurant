import React from 'react';
import './Header.css';
import {images} from '../../constants'
import {SubHeading} from "../../components";

const Header = () => {
    return (
        <div id='home' className='app__header app__wrapper section__padding'>
            <div className='app__header-1 app__wrapper_info'>
                <SubHeading title='Chase the new flavour'/>
                <h1 className='app__header-h1'>The Key to Fine Dining</h1>
                <p className='p__manrope' style={{margin: '2rem 0'}}>Sit tellus lobortis sed senectus vivamus molestie.
                    Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                <button type='button' className='custom__button'>Explore Menu</button>
            </div>
            <div className='app__wrapper_img'>
                <img src={images.welcome} alt='header img'/>
            </div>
        </div>
    )
}
export default Header

