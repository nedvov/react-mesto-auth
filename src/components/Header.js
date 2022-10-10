import { Link } from 'react-router-dom';
import React from 'react';
import burgerImage from '../images/header_burger.png';
import closeImage from '../images/header_close.png'; 

function Header({loggedIn, onButtonClick, buttonText, linkTo, linkText, email}) {
    const [isBurgerOpen, setBurgerOpenState] = React.useState(false);
    const [width, setWidth] = React.useState(window.innerWidth);
    const [clientWidth, setClientWidth] = React.useState(document.documentElement.clientWidth);

    function clickBurger() {
        setBurgerOpenState(!isBurgerOpen)
    }

    function updateWidth () {
        setWidth(window.innerWidth);
        setClientWidth(document.documentElement.clientWidth)
    };

    React.useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });

    return (        
        <header className="header">
            {
            (isBurgerOpen && width <= 767) &&
                <div className="header__info">
                    <p className="header__email">{email}</p>
                    <button type="button" className="header__button" onClick={onButtonClick}>{buttonText}</button>
                    <div className="header__line" style={{width: clientWidth}}/>
                </div>                
            }            
            <div className="header__main">
                <div className="header__logo" />
                {loggedIn ?
                    (width <= 767 ?
                        <button 
                            type="button" 
                            className="header__burger" 
                            onClick={clickBurger}
                            style={isBurgerOpen ? {backgroundImage: `url(${closeImage})`} : {backgroundImage: `url(${burgerImage})`}}
                        />

                    :
                        <div className="header__info">
                            <p className="header__email">{email}</p>
                            <button type="button" className="header__button" onClick={onButtonClick}>{buttonText}</button>
                        </div>
                    )
                :
                    <Link to={linkTo} className="header__link">{linkText}</Link>
                }                
            </div>  
            {
                width <= 767 && <div className="header__line" style={{marginBottom: '40px', width: clientWidth}}/>
            }  
        </header>
    );
  }
  
export default Header;