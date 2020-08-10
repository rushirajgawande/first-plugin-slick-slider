$(document).ready(function(){
  $('.center').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
  });


  $('.maydatepicker').pickadate();
  $('.maytimepicker').pickatime();


  $( '#example1' ).sliderPro({
			width: '100%',
			height: 500,
			arrows: true,
			buttons: false,
			waitForLayers: true,
			thumbnailWidth: 200,
			thumbnailHeight: 100,
			thumbnailPointer: true,
			autoplay: false,
			autoScaleLayers: false,
			breakpoints: {
				500: {
					thumbnailWidth: 120,
					thumbnailHeight: 50
				}
			}
		});

    $(".main").tiltedpage_scroll({
   sectionContainer: "> section",     // In case you don't want to use <section> tag, you can define your won CSS selector here
   angle: 50,                         // You can define the angle of the tilted section here. Change this to false if you want to disable the tilted effect. The default value is 50 degrees.
   opacity: true,                     // You can toggle the opacity effect with this option. The default value is true
   scale: true,                       // You can toggle the scaling effect here as well. The default value is true.
   outAnimation: true                 // In case you do not want the out animation, you can toggle this to false. The defaul value is true.
 });

   $("#myenquiryform").validate({
     rules: {
        fname: {
          required: true,
          minlength: 5,
          maxlength: 8
        },
        mobile: {
          digits: true,
          minlength: 10,
          maxlength: 10
        }
      },
     submitHandler: function(form) {
      form.submit();
     }
  });
});


function showMyLoader(){
  $('body').loading('toggle');
  setTimeout(function(){
    $('body').loading('toggle');
  },3000);
}

function hideMyLoader(){
  $('#try-this-loader').loading('toggle');
}
