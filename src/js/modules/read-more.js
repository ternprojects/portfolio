$(function () {
	let h = 170,
		t = $('#article'),
		max = t[0].scrollHeight,
		min = 92
	$('.read-next').on('click', function (e) {
		let H = t.height()
		if (H === max) {
			H = min
		} else if (H + h > max) {
			H = max
		} else {
			H += h
		}
		t.height(H)
		$(this).text(H == max ? 'Hide' : 'Read more')
		return false
	})
})
