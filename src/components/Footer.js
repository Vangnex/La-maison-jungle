import { useState } from 'react'
import '../styles/Footer.css'


function Footer() {
	const [inputValue, setInputValue] = useState('')

	function checkMail(entry) {
		if (!entry.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.");
		}
	}
	
	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input
				value={inputValue}
				placeholder='Votre mail...'
				onChange={(e) => setInputValue(e.target.value)}
				onBlur={(e) => checkMail(e.target.value)}
			/>
		</footer>
	)
}

export default Footer