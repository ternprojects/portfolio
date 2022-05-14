export function readMore1() {
	let dots1 = document.getElementById('dots1')
	let more1 = document.getElementById('more1')
	let btn1 = document.getElementById('btn1')

	if (dots1.style.display === 'none') {
		dots1.style.display = 'inline'
		btn1.innerHTML = 'Read More'
		more1.style.display = 'none'
	} else {
		dots1.style.display = 'none'
		btn1.innerHTML = 'Hide'
		more1.style.display = 'inline'
	}
}

btn1.onclick = readMore1

export function readMore2() {
	let dots2 = document.getElementById('dots2')
	let more2 = document.getElementById('more2')
	let btn2 = document.getElementById('btn2')

	if (dots2.style.display === 'none') {
		dots2.style.display = 'inline'
		btn2.innerHTML = 'Read More'
		more2.style.display = 'none'
	} else {
		dots2.style.display = 'none'
		btn2.innerHTML = 'Hide'
		more2.style.display = 'inline'
	}
}

btn2.onclick = readMore2
