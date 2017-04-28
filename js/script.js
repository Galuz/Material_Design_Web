$(document).ready(function() {
    $('a[href="#navbar-more-show"], .navbar-more-overlay').on('click', function(event) {
    event.preventDefault();
    $('body').toggleClass('navbar-more-show');
    if ($('body').hasClass('navbar-more-show')) {
      $('a[href="#navbar-more-show"]').closest('li').addClass('active');
    }else{
      $('a[href="#navbar-more-show"]').closest('li').removeClass('active');
    }
    return false;
  });
});

function initMap() {
        var uluru = {lat: 19.0659357, lng: -104.3035223};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
}