function toggleMobileMenu() 
{
	var $mobileMenu = $('#mobile-main-menu');	
	$mobileMenu.slideToggle('fast');
}

$(document).ready(function() {
	$('#mobile-menu-button').on('click', toggleMobileMenu);
});

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -12.122780683256321, lng: -77.03198631600169},
    zoom: 17
  });
  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: -12.122780683256321, lng: -77.03198631600169}
  });
}