import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'


function CareScale({scaleValue, careType}) {
    const range = [1, 2 ,3];
    const scaleType = careType === 'light' ? (
        <img src={Sun} alt='sun-icon' />
    ) : (
        <img src={Water} alt='water-icon' />
    )

    function alertCare(scaleValue, careType) {
        let msg = "Cette plante requiert ";
        let care = scaleValue === 3 ? "beaucoup " : (scaleValue === 2 ? "modérement " : "peu ");
        let type = careType === 'water' ? "d'arrosage" : "de lumière";
        alert(msg + care + type);
    }
    
    return (
        <div onClick={() => alertCare(scaleValue, careType)}>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

export default CareScale;