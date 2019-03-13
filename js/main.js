document.querySelector('.nav-button').addEventListener('click', function() {
    document.querySelector('.nav-button').classList.toggle("change");
    document.querySelector('.page-nav').classList.toggle("active");
})

const id = selector => document.getElementById(selector);

const modalOpen = id('open-modal');
const closeModal = id('close-modal');
const overlay = id('overlay');
const modal = id('modal');

modalOpen.addEventListener('click', function() { 
    overlay.classList.add('active-inline');
    modal.classList.add('active-inline'); 
    document.body.style.overflow = "hidden";
})

closeModal.addEventListener('click', function() {
overlay.classList.remove('active-inline');
document.body.style.overflowY = "auto";
})

// close modal on click outside modal
window.onclick = function(event) {
    if (event.target == overlay) {
        overlay.classList.remove('active-inline');
        document.body.style.overflowY = "auto";
    }
}

$( function() {
    $( "#tabs-photo" ).tabs({
        beforeLoad: function( event, ui ) {
            ui.jqXHR.fail(function() {
            ui.panel.html(
                "Couldn't load this tab. We'll try to fix this as soon as possible. " +
                "If this wouldn't be a demo." );
            });
        },
        hide: { effect: "fade", duration: 700 }
    });
} );

$( function() {
    $( "#tabs-video" ).tabs({
        beforeLoad: function( event, ui ) {
            ui.jqXHR.fail(function() {
            ui.panel.html(
                "Couldn't load this tab. We'll try to fix this as soon as possible. " +
                "If this wouldn't be a demo." );
            });
        },
        hide: { effect: "fade", duration: 700 }
    });
} );


// smooth scrolling from https://css-tricks.com/snippets/jquery/smooth-scrolling/
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });  
