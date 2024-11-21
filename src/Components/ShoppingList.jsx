import { MaillotList } from '../datas/MaillotList';
import '../styles/ShoppingList.css';
import MaillotItem from './MaillotItem';


function ShoppingList({cart,updateCart}) { //Cette fonction est pour la categorie de la taille
	const sizes = MaillotList.reduce(
		(acc, maillot) =>
			acc.includes(maillot.sizes) ? acc : acc.concat(maillot.sizes),
		[]
	);

	return (
		<div>
			{/* Liste des sizes (tailles) */}
			<ul>
					{sizes.map((taille) => (
					<li key={taille}>{taille}</li>
				))}
			</ul>

			{/* Map() MaillotList et afficher le name et le cover */}

			<ul className='bdm-shopping-list'>
					{MaillotList.map(({ cover, name , price, sizes }) => (
						<div>

							<MaillotItem cover={cover} name={name} price={price} sizes={sizes}
							/>
							<button className='bdm-button' onClick={()=> updateCart(cart+price)} >Ajouter au Panier</button>
						</div>
					
				))}
			</ul>
		</div>
	);
}

export default ShoppingList;
