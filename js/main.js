function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function myFunctions() {
    document.getElementById("myDropdowns").classList.toggle("show");
  }
  
  function filterFunction() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("myInputs");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdowns");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }


  (function($) {

    $.fn.menumaker = function(options) {
        
        let cssmenu = $(this), settings = $.extend({
          format: "dropdown",
          sticky: false
        }, options);
  
        return this.each(function() {
  
          $(this).find(".button").on('click', function(){
            $(this).toggleClass('menu-opened');
            let mainmenu = $(this).next('ul');
            if (mainmenu.hasClass('open')) { 
              mainmenu.slideToggle().removeClass('open');
            }
            else {
              mainmenu.slideToggle().addClass('open');
              if (settings.format === "dropdown") {
                mainmenu.find('ul').show();
              }
            }
          });
  
          cssmenu.find('li ul').parent().addClass('has-sub');
  
          multiTg = function() {
            cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
            cssmenu.find('.submenu-button').on('click', function() {
              $(this).toggleClass('submenu-opened');
              if ($(this).siblings('ul').hasClass('open')) {
                $(this).siblings('ul').removeClass('open').slideToggle();
              }
              else {
                $(this).siblings('ul').addClass('open').slideToggle();
              }
            });
          };
  
          if (settings.format === 'multitoggle') multiTg();
          else cssmenu.addClass('dropdown');
  
          if (settings.sticky === true) cssmenu.css('position', 'fixed');
  
          resizeFix = function() {
            if ($( window ).width() > 468) {
              cssmenu.find('ul').show();
  
            }
  
            if ($(window).width() <= 468) {
              cssmenu.find('ul').hide().removeClass('open');
  
            }
          };
          resizeFix();
          return $(window).on('resize', resizeFix);
  
        });
    };
  })(jQuery);
  
  (function($){
  $(document).ready(function(){
  $("#cssmenu").menumaker({
     format: "multitoggle"
  });
  
  });
  })(jQuery);
  