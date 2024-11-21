//Le composant Cart permettra d'afficher le Panier! Ici je pourrais donc Ajouter un élément au panier et fermer le panier.

import { useState } from 'react';
import '../styles/Cart.css'


function Cart({cart, updateCart}){
    
    
   
    const [isOpen, setIsOpen] = useState(true)

    return isOpen? (

        <div className='bdm-cart'>

                <button className='bdm-Cart-bouton-fermer' onClick={()=> setIsOpen(false)}>Fermer</button>


                    <h2> Panier </h2>
                    <>
            
                   {/* <button onClick={()=> updateCart(cart+1)}>Ajouter</button>*/} 
                    </>


            <h3>Total: {cart}$</h3>
        </div>

    ):(
        <div className='bdm-panier'>
            <button className='bdm-boutton-OP' onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
        </div>
    )
}
export default Cart