// App: Il organise les composants enfants, gère les données globales et sert de base pour tout ce qui est affiché à l'utilisateur.

import React from 'react';
import Banner from './Banner';
import ShoppingList from './ShoppingList';
import nba from '../assets/nba.png';
import Cart from './Cart';
import { useState } from 'react';
import '../styles/layout.css'
import Footer from './Footer';



function App() {

  const [cart, updateCart] = useState(0)
  
  return (
    <>
    
    <Banner>
          <img src={nba} alt='Boutique de maillot' className='bdm-logo-nba'/>
          <h3 className='bdm-title-banner'> Boutique de maillot </h3>
    </Banner>

    <div className='bdm-layout'>
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart}/>
        <Footer/>
    </div>
    
    </>
  );
}

export default App;// exportation par defaut du composant App;  
