// JavaScript Document

$(document).ready(function (e){
 document .addEventListener ("deviceready",onDeviceReady, falce);
 function onDeviceReady(){
	 
	  $('#btnbeep').on('tap',function(){
	     navigator.geolocation.getCurrentPosition( function (position){
			 $('#localizacion').html('latitude: '     +position.coords.latitude     + '\n' +
			  'Longitude:'            +position.coords.longitude             +'\n'+
			  'Altitude:'             +position.coords.altitude              +'\n'+
			  'Accuracy:'             +position.coords.accuracy              +'\n'+
			  'Altitude Accuracy:'    +position.coords.altitudeAccuracy      +'\n'+
			  'Heading:'              +position.coords.heading               +'\n'+
			  'Speed:'                +position.coords.speed                 +'\n'+
			  'Timestamp:'            +position.timestamp                    +'\n');
			  
		 }, $('#localizacion').html('Error en la localizacion') );
	  });
   }
});
