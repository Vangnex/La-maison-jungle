import '../styles/PlantItem.css'
import CareScale from './CareScale';

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem(props) {
    const name = props.name;
    const cover = props.cover;
    const price = props.price;
    const light = props.light;
    const water = props.water;

    return (
        <li className='lmj-plant-item' onClick={() => handleClick(name)}>
            <span className='lmj-plant-item-price'>{price}€</span>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`}/>
            {name}
            <div>
    			<CareScale careType='water' scaleValue={water}/>
	    		<CareScale careType='light' scaleValue={light}/>
            </div>
        </li>
    )
}

export default PlantItem;