'use strict';
$(function () {

$('.thumbnail').on('click', event => {
		const grab = $(this).find('img').attr('src');
		$('.hero img' ).attr('src');
		$('.hero img' ).attr('src', grab);


		console.log('grab');
	});
// find the thumnail pic (event listen)
// replace .attr  .find
// change the alt

});