$(document).ready(function () {

    const pairs = $('.eye-pair');
    pairs.each(function(index, pair) {
        pair = $(pair)
        pair.css({'top': '30px', 'left': '30px'})
    });
    // $('.eye-pair').css('top', '30px');

	$(document).mousemove(function(e) {
        lookAt(e.pageX, e.pageY);
    });

    
    
});



function lookAt(X, Y) {
  let eyeBalls = $('.pupil'),
		eye = $('.eye:first-child'),
		eyeWidth = eye.height(),
		eyeHeight = eye.width();
  
  eyeBalls.each(function(index, eyeBall) {
			eyeBall = $(eyeBall);

			let position = eyeBall.offset(),
				positionX = position.left + eyeBall.width()/2,
				positionY = position.top + eyeBall.height()/2,
				delX = X - positionX,
				delY = Y - positionY,
				offsetX = Math.atan(delX*.01)/Math.PI * eyeWidth,
				offsetY = Math.atan(delY*.01)/Math.PI * eyeHeight;
			
			eyeBall.css('transform', 'translate3d(' + offsetX + 'px, ' + offsetY + 'px, 0)');
		});
}

