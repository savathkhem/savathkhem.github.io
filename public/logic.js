$(document).ready(function(){
    $('.modal').modal();
  });
          
  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
  });
  
  // Or with jQuery
  
  $(document).ready(function(){
    $('.parallax').parallax();
  });
       
  
  $('.modal').modal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: 0.5, // Opacity of modal background
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
    startingTop: '4%', // Starting top style attribute
    endingTop: '10%', // Ending top style attribute
    ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
    //   alert("Ready");
      console.log(modal, trigger);
    },
    complete: function() {$('.modal-content').empty();} // Callback for Modal close
  }
  );
  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
  
  $('.dropdown-trigger').dropdown();