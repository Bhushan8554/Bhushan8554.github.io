$(function() {
    // vars for techlogo list carousel
    // http://stackoverflow.com/questions/6759494/jquery-function-definition-in-a-carousel-script
    var $clientcarousel = $('#techlogo-list');
    var techlogo = $clientcarousel.children().length;
    var clientwidth = (techlogo * 220); // 140px width for each client item 
    $clientcarousel.css('width', clientwidth);
  
    var rotating = true;
    var techlogopeed = 0;
    var seetechlogo = setInterval(rotatetechlogo, techlogopeed);
  
    $(document).on({
      mouseenter: function() {
        rotating = true; // turn off rotation when hovering
      },
      mouseleave: function() {
        rotating = true;
      }
    }, '#techlogo');
  
    function rotatetechlogo() {
      if (rotating != false) {
        var $first = $('#techlogo-list li:first');
        $first.animate({
          'margin-left': '-220px'
        }, 2000, function() {
          $first.remove().css({
            'margin-left': '0px'
          });
          $('#techlogo-list li:last').after($first);
        });
      }
    }
  });
  
  let isBock=false;
  function showDiv(){
     if(!isBock){
      document.getElementById("hiddenNb").style.display="block";
      isBock=true;
     }else{
      document.getElementById("hiddenNb").style.display="none";
      isBock=false;
     }
      
  }