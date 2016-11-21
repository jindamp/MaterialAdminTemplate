/*$(".button-collapse").sideNav();*/
$('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
    // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
      



/*$(".pavan").sideNav();*/
  $(".pavan").sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );

$(".dropdown-button").dropdown();
$('.materialboxed').materialbox();