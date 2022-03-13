(function ($) {
	"use strict";

      $(document).ready(function(){
        
        $("#openregistermodal").click(function(){
          $('#registermodal').modal('show');
           $('#loginmodal').modal('hide');
        });
        
        $("#openlogin").click(function(){
          $('#loginmodal').modal('show');
           $('#registermodal').modal('hide');
        });
        
      });
    
	
}(jQuery));	


function copyToClipboard() {
  /* Get the text field */
  var copyText = document.getElementById("referralurl");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  
}