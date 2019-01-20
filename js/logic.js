$(function(){
	$(".plus").click(function(){
		$(this).parent().children().next().toggle(200);
	});
});
function tab1(obj) {
	document.getElementById('content-tab2').style.display="none";
	document.getElementById('content-tab3').style.display="none";
	document.getElementById('content-tab4').style.display="none";
	document.getElementById('content-tab5').style.display="none";
}
function tab2(obj) {
	document.getElementById('content-tab1').style.display="none";
	document.getElementById('content-tab3').style.display="none";
	document.getElementById('content-tab4').style.display="none";
	document.getElementById('content-tab5').style.display="none";
}

function tab3(obj) {
	document.getElementById('content-tab1').style.display="none";
	document.getElementById('content-tab2').style.display="none";
	document.getElementById('content-tab4').style.display="none";
	document.getElementById('content-tab5').style.display="none";
}

function tab4(obj) {
	document.getElementById('content-tab1').style.display="none";
	document.getElementById('content-tab2').style.display="none";
	document.getElementById('content-tab3').style.display="none";
	document.getElementById('content-tab5').style.display="none";
}

function tab5(obj) {
	document.getElementById('content-tab1').style.display="none";
	document.getElementById('content-tab2').style.display="none";
	document.getElementById('content-tab3').style.display="none";
	document.getElementById('content-tab4').style.display="none";
}

$(document).ready(function() {
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
});

new WOW().init();
$(function() {
	var f = $('.filtr-container').filterizr({ controlsSelector: '.fltr-controls' });
	$('.color-container-1').filterizr({ controlsSelector: '.color-controls-1' });
	$('.color-container-2').filterizr({ controlsSelector: '.color-controls-2', layout: 'packed' });
	$('.color-container-3').filterizr({ controlsSelector: '.color-controls-3', layout: 'sameHeight' });
	window.filterizr = f;
});


document.getElementById('backtotop').style.display = 'none';
window.addEventListener('scroll', function(){
	if (window.scrollY > 300) {
		document.getElementById('backtotop').style.display = 'block';
	}
	else
		document.getElementById('backtotop').style.display = 'none';

})





// web-design

$(function(){
	$(".web-1").click(function(){
		$(this).parent().children().next().toggle(200);
	});
});
function web1(obj) {
	document.getElementById('content-web1').style.display="block";
	document.getElementById('content-web2').style.display="none";
	document.getElementById('content-web3').style.display="none";
	document.getElementById('content-web4').style.display="none";
}
function web2(obj) {
	document.getElementById('content-web1').style.display="none";
	document.getElementById('content-web2').style.display="block";
	document.getElementById('content-web3').style.display="none";
	document.getElementById('content-web4').style.display="none";
}

function web3(obj) {
	document.getElementById('content-web1').style.display="none";
	document.getElementById('content-web2').style.display="none";
	document.getElementById('content-web3').style.display="block";
	document.getElementById('content-web4').style.display="none";
}

function web4(obj) {
	document.getElementById('content-web1').style.display="none";
	document.getElementById('content-web2').style.display="none";
	document.getElementById('content-web3').style.display="none";
	document.getElementById('content-web4').style.display="block";
}


