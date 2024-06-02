import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import { useState } from 'react'
import PlantItem from './PlantItem';
import Category from './Category'

function ShoppingList({cart, updateCart}) {

	const [categorySort, setCategorySort] = useState('');

	function sortPlantList() {
		if (categorySort === "") {
			return plantList;
		}
		return plantList.filter((plant) => plant.category === categorySort)
	}

	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name);
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{name, price, amount: currentPlantSaved.amount + 1}
			])
		} else {
			updateCart([...cart, {name, price, amount: 1}])
		}
	}

    return (
		<div className='lmj-shopping-list'>
			<Category setCategorySort={setCategorySort}/>
			<ul className='lmj-plant-list'>
				{sortPlantList().map((plant) => (
					<div key={plant.id}>
						<PlantItem
							cover={plant.cover}
							name={plant.name}
							light={plant.light}
							water={plant.water}
							price={plant.price}
						/>
						<button onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>
					</div>
				))}
			</ul>
		</div>
    )
}

export default ShoppingList