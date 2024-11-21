// Ici nous mettrons les affichages du cover ainsi que les formulaires.

import '../styles/MaillotItem.css';


function handleClick(MaillotList) {
	alert(`Voulez-vous acheter 1 ${MaillotList} de taille   ? Très bon choix!`)
}

function MaillotItem({ cover, name, price, sizes}) {
	return (

		<li className='bdm-maillot-item' onClick={() => handleClick(name,sizes)}>
				<img className='bdm-maillot-item-cover' src={cover} alt={`${name} }cover`} />
				<div className='bdm-maillot-item-name'>{name}</div>
				<span className='bdm-maillot-item-price'>{price}$</span>


				<div>

				</div>
		</li>

	)
}

export default MaillotItem
