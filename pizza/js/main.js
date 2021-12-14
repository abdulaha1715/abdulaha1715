	
	
	
	
	/* google Map */
	
	var myCenter = new google.maps.LatLng(7.8731, 80.7718);

	function initialize() {
		var mapProp = {
			center: myCenter,
			zoom: 8,
			mapTypeId: google.maps.MapTypeId.ROADMAP
				//there are 4 type of Map, use any one of them above =>>
				//1.ROADMAP:normal, default 2D map
				//2.SATELLITE:photographic map
				//3.HYBRID:photographic map + roads and city names
				//4.TERRAIN:map with mountains, rivers, etc.  
		};

		var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

		var marker = new google.maps.Marker({
			position: myCenter,
			//to animate the markar =>> animation:google.maps.Animation.BOUNCE

			//to use custom markar icon =>> icon:'markar.png'
		});

		marker.setMap(map);

		//to use info windoa : Start
		//var infowindow = new google.maps.InfoWindow({
		//content:"Hello World!"
		//});
		//infowindow.open(map,marker);
		//to use info windoa : Close


		// Zoom to 3 when clicking on marker : Start
		//google.maps.event.addListener(marker,'click',function() {
		//map.setZoom(9);
		//map.setCenter(marker.getPosition());
		//});
		// Zoom to 3 when clicking on marker : Close


		// 2 seconds after the center of the map has changed, pan back to the marker : Start 
		//google.maps.event.addListener(map,'center_changed',function() {
		//window.setTimeout(function() {
		//map.panTo(marker.getPosition());
		//},2000);
		//});
		// 2 seconds after the center of the map has changed, pan back to the marker : Close


		//Open an InfoWindow When Clicking on The Marker : Start 
		//var infowindow = new google.maps.InfoWindow({
		//content:"Hello World!"
		//});

		//google.maps.event.addListener(marker, 'click', function() {
		//infowindow.open(map,marker);
		//});
		//Open an InfoWindow When Clicking on The Marker : Close 
	}

	google.maps.event.addDomListener(window, 'load', initialize);

	
	/* *|google Map */



$(document).ready(function(){

var quantitiy=0;
   $('.quantity-right-plus').click(function(e){
        
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());
        
        // If is not undefined
            
            $('#quantity').val(quantity + 1);

          
            // Increment
        
    });

     $('.quantity-left-minus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());
        
        // If is not undefined
      
            // Increment
            if(quantity>0){
            $('#quantity').val(quantity - 1);
            }
    });
    
});












