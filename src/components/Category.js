import { plantList } from '../datas/plantList'
import '../styles/Category.css'

function Category({setCategorySort}) {
    const plantListByCategory = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    );

    function upcaseFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className='lmj-categories'>
            <select onChange={(e) => setCategorySort(e.target.value)} className='lmj-categories-select'>
                <option key="tout" value="">Tout</option>
                {plantListByCategory.map((category) => (
                    <option key={category} value={category}>{upcaseFirstLetter(category)}</option>
    			))}
            </select>
        </div>
    )
}

export default Category;