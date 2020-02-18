  
   var clickTimeout;
   $.fn.googleclick = function() {
       $(this).css({
           "position": "relative",
           "overflow": "hidden",
       });
   
       this.mousedown(function(e) {
           stopCleaningUpClicks();
           var additionalStyles = $(this).data("additionalStyles");
           if (!additionalStyles) {
               additionalStyles = "";
           }
           var thisOffset = $(this).offset();
           var size = this.offsetWidth;
           var x = e.pageX - thisOffset.left - size / 2;
           var y = e.pageY - thisOffset.top - size / 2;
           var styles = "left:" + x + "px;top:" + y + "px;width:" + size + "px;height:" + size + "px";
           $(this).append("<div class='gc-wave wave " + additionalStyles + "' style=" + styles + "></div>");
           clickTimeout = setTimeout(cleanUpClicks, 2000);
       });
   
       function cleanUpClicks() {
           $(".gc-wave").remove();
       }
   
       function stopCleaningUpClicks() {
           clearTimeout(clickTimeout);
       }
   };
   
   $(".btn-wave").googleclick();
   
   $('.main-table-row d-flex justify-content-between').click(function(e) {
   
   });
   
   function opendetail() {
       $('body').addClass('opendetail');
       var $target = $('.mdl-layout__content');
       var $targeta = $('.location-details-div');
       $target.animate({
           scrollTop: -$targeta.height()
       }, 10);
   }
   
   function mapopen() {
   
       // if ($( "#mydiv" ).hasClass( "foo" )) {
       //   $('.main-section--panel').addClass('openmapbox')
       // }
   
       var $target = $('.mdl-layout__content');
       var $targeta = $('.location-details-div');
       $target.animate({
           scrollTop: -$targeta.height()
       }, 500);
   
       var height = $('.mdl-layout__content').scrollTop();
       if (height < 350) {
   
           $('.main-section--panel').toggleClass('openmapbox');
           $('.main-section--panel').toggleClass('closedmapbox');
   
       } else {
           $('.main-section--panel').addClass('openmapbox');
   
       }
   }
   

// employee detail popup js

 function employeedetailopen(name) {
       $('#exampleModalLong').modal('show');
       $('#namechange').text(name);
        $('#search--popup').modal('hide');

       $("body").removeClass("active-search-list");
           $("body").removeClass("open-search-box");
           $('body').removeClass("focusin-search");

   }



// reminder popup js
   function reminderopen(obj) {
   
   if ($(obj).hasClass('bookmarked')) {
        $(obj).removeClass('bookmarked');
   }else{
       $('#reminder-popup').modal('show');
       $(obj).toggleClass('bookmarked');
   }
   }


   


   
   
   var boxes = $('#modality--filter input');
   boxes.on('change', function() {
       $('.filter-content-main-section').toggleClass("filteritemshow", boxes.is(":checked"));
   });
   
   $('.enable-filters-button').on('click', function() {
       $('.full-page-sidebar').toggleClass("enabled-sidebar");
       $(this).toggleClass("active");
       $('.filter-button-tooltip').removeClass('tooltip-visible');
   });
   $(window).on('load', function() {
       $('.filter-button-tooltip').css({
           left: $('.enable-filters-button').outerWidth() + 0
       }).addClass('tooltip-visible');
   });
   
   $('#clear-btn').click(function() {
       $(".filter-content-main-section").removeClass("filteritemshow");
   });
   
   $('#checkbox-1').change(function() {
       if ($(this).is(":checked")) {
           $('#checkbox--1').addClass("show");
       } else {
           $('#checkbox--1').removeClass("show");
       }
   });
   
   $('#checkbox-2').change(function() {
       if ($(this).is(":checked")) {
           $('#checkbox--2').addClass("show");
       } else {
           $('#checkbox--2').removeClass("show");
       }
   });
   
   $('#checkbox-3').change(function() {
       if ($(this).is(":checked")) {
           $('#checkbox--3').addClass("show");
       } else {
           $('#checkbox--3').removeClass("show");
       }
   });
   
   $('#checkbox-4').change(function() {
       if ($(this).is(":checked")) {
           $('#checkbox--4').addClass("show");
       } else {
           $('#checkbox--4').removeClass("show");
       }
   });
   
   $('.nav-column li').each(function() {
       if ($(this).hasClass('active')) {
           $(this).closest('.nav-column').siblings('div.home').toggleClass("off");
       }
   });
   
   var $targetmain = $('.mdl-layout__content');
   var $targetmaina = $('#caselist-dashboard');
   var $targetmainb = $('#worklocationlist-dashboard');
   var $rowsa = $(".main-section--panel").addClass("loading-content");
   



   
   
   $("#div1").mouseenter(function() {
       var $div2 = $("#div2");
       if ($div2.is(":visible")) {
           return;
       }
       $div2.show();
       setTimeout(function() {
           $div2.hide();
       }, 10000);
   });
   
   
   
   $('.modal').on('shown.bs.modal', function() {
       $('body').removeClass("active-search-list");
   });
   
   $('#notifications--popup').on('shown.bs.modal', function() {
      // debugger;
       $('body').addClass("active-notification-list");
   });
   
   $('#notifications--popup').on('hidden.bs.modal', function() {
       $('body').removeClass("active-notification-list");
   })
 

   $(".messages").animate({
       scrollTop: $(document).height()
   }, "fast");
   
   $("#profile-img").click(function() {
       $("#status-options").toggleClass("active");
   });
   
   $(".expand-button").click(function() {
       $("#profile").toggleClass("expanded");
       $("#contacts").toggleClass("expanded");
   });
   
   $("#status-options ul li").click(function() {
       $("#profile-img").removeClass();
       $("#status-online").removeClass("active");
       $("#status-away").removeClass("active");
       $("#status-busy").removeClass("active");
       $("#status-offline").removeClass("active");
       $(this).addClass("active");
   
       if ($("#status-online").hasClass("active")) {
           $("#profile-img").addClass("online");
       } else if ($("#status-away").hasClass("active")) {
           $("#profile-img").addClass("away");
       } else if ($("#status-busy").hasClass("active")) {
           $("#profile-img").addClass("busy");
       } else if ($("#status-offline").hasClass("active")) {
           $("#profile-img").addClass("offline");
       } else {
           $("#profile-img").removeClass();
       };
   
       $("#status-options").removeClass("active");
   });
   
   function newMessage() {
       message = $("#message_input").val();
       if ($.trim(message) == '') {
           return false;
       }
       $('<li class="sent"><img src="images/userprofilephoto.jpeg" alt="" /><p>' + message + '</p></li>').appendTo($('.messages ul'));
       $('#message_input').val(null);
       $('.contact.active .preview').html('<span>You: </span>' + message);
       $(".messages").animate({
           scrollTop: $(document).height()
       }, "fast");
   };
   
   $('.submit').click(function() {
       newMessage();
   });
   
   $(window).on('keydown', function(e) {
       if (e.which == 13) {
           newMessage();
           return false;
       }
   });

   
   $('.modal').on('shown.bs.modal', function(e) {
       $(".dropdown-menu").removeClass("show");
   })
   
   $('.mdl-layout__header-row .dropdown').on('show.bs.dropdown', function() {
       $('.modal').modal('hide');
   })
   
   $(function() {
       $("[data-toggle=popover]").popover();
   });
   
   $('body').on('click', function(e) {
       $('[data-toggle=popover]').each(function() {
           // hide any open popovers when the anywhere else in the body is clicked
           if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
               $(this).popover('hide');
           }
       });
   });
   
   $('.collapse').on('shown.bs.collapse', function() {
       $(this).parent().addClass('active-acc');
       $(this).parent().removeClass('closed-acc');
   
   });
   $('.collapse').on('hidden.bs.collapse', function() {
       $(this).parent().removeClass('active-acc');
       $(this).parent().addClass('closed-acc');
   
   });
   
   
   $( function() {
   $( ".with-map .full-page-content-container" ).resizable({
    
     maxWidth: 1500,
     
     minWidth: 500
   });

   var $input = $('<span  class="resizable-btn" id="draggable-icon" /></span> <div class="mdl-tooltip mdl-tooltip--right" for="draggable-icon">Drag For Resize</div> ');
        $input.appendTo($(".ui-resizable-handle.ui-resizable-e"));
        
   } );
   
   
   
   $('.dropdown-menu button').click(function(e) {
    e.stopPropagation();
   });


 
   
 
 $('.dropdown-menu label').click(function(e) {
   e.stopPropagation();
   });

 


        $('.perfactscrollbar').each(function(){ 
            const ps = new PerfectScrollbar($(this)[0]); 
        });
        
       

//add mobile tablet


(function($) {
    var $window = $(window),
        $html = $('html');
        $window.resize(function resize() {
        /**
        0 -767 "Mobile"
768 - 1024 "Tablet"
1024-1300 "Laptop"
"Desktop"**/
        var currentClass;
        var currentWindowWidth=$window.width()
        if ( currentWindowWidth >= 0 && currentWindowWidth <= 767) {
            currentClass='mobile';// $html.addClass('mobile');
        }
        else if ( currentWindowWidth >= 768 && currentWindowWidth <= 1024) {
             currentClass='tablet';
        }else if ( currentWindowWidth >= 1024 && currentWindowWidth <= 1300) {
             currentClass='laptop';
        }else{
             currentClass='desktop';
             $("body").addClass("opensidebarmenu");
        }
        
        $html.removeClass('mobile');
        $html.removeClass('tablet');
        $html.removeClass('laptop');
        $html.removeClass('desktop');
        
         return $html.addClass(currentClass);

    }).trigger('resize');
})(jQuery);


// dropdown 
$(document).on("click",".dropdown-menu.custom-filter-dropdown",function(e){
    e.stopPropagation();
});

// 
// 
// 
// 
// Edit form 
function editinfo(obj) {
    $(obj).collapse("show");
    $(obj).parent().addClass('enable-edit-form');
    
};

$('.acc-cancel').on('click', function(e) {
    $('.active-acc').removeClass('enable-edit-form');
});

// 
// 
// 
// 
// full list view map view

$(document).on("change","#list-check-id",function(){
    if ($(this).is(":checked")) {
        $('#map-check-id').attr('checked', false);
        $('body').addClass("view-full-map");
        $('body').removeClass("view-full-list");
    } else {
        $('body').removeClass("view-full-map");
    }
});

$(document).on("change","#map-check-id",function(){
    if ($(this).is(":checked")) {
        $('#list-check-id').attr('checked', false);
        $('body').addClass("view-full-list");
        $('body').removeClass("view-full-map");
      } else {
        $('body').removeClass("view-full-list");
      }
});

$(document).on("click",".btn-on-filter",function(){
    $('.full-page-container').toggleClass('hide-filter-option');
});

$(document).on("click",".clear-map-control",function(){
    $('body').removeClass('view-full-list');
    $('body').removeClass('view-full-map');
    $('.map-controls input[type=checkbox]').prop('checked', false)
});


// 
// 
// 
// 
// search box on header
$(document).ready(function(){
    $(document).on("focus","#test12",function(){
        $('body').removeClass("focusout-search");
        $('body').addClass("active-search-list");
        $('body').addClass("focusin-search");
    });

    $(document).on("blur","#test12",function(){
        $('body').addClass("focusout-search");
        $('body').removeClass("focusin-search");
    });
});

$(document).on("click","#search-btn",function(){
    $('body').toggleClass("open-search-box");
    $('.searcboxbtn').click();
});

$(document).on("click","body",function(e){
    if ($(e.target).closest('#searchbox-employee').length == 0 && $(e.target).closest('.searchbox').length == 0 && $(e.target).closest('#search-btn').length == 0 ) {
        $("body").removeClass("active-search-list");
        $("body").removeClass("open-search-box");
        $('body').removeClass("focusin-search");
       }
});

$(document).on("click","body",function(e){
    if ($(e.target).closest('.calendarDatePick').length == 0 && $(e.target).closest('.calendarDatePick .input-group-btn').length == 0 && $(e.target).closest('#search-btn').length == 0 ) {
        $('.dropdown-menu.show').closest(".calendarDatePick .btn").click();
     $('.dropdown-menu.show').closest('.input-group').find('.btn').click();
       }
});






$('#exampleModalCenter').on('shown.bs.modal', function() {

   if ($( "#exampleModalLong" ).hasClass( "show" )) {
        $('body').addClass("active-caselist-on-employee");
       }else{
        $('body').removeClass("active-caselist-on-employee");
       }
       
});


$('#exampleModalCenter').on('hidden.bs.modal', function() {

   $('body').removeClass("active-caselist-on-employee");
       
});

$('#exampleModalLong').on('hidden.bs.modal', function() {

   $('body').removeClass("active-caselist-on-employee");
       
});




//// sidebar menu


$(".main--bar-btn").hover(function() {
    $('body').addClass('small--menu-hover')
}, function() {
    $('body').removeClass('small--menu-hover')
});



$(".main--bar-btn").click(function() {
    $('body').toggleClass('open-small--menu')
});

 // $('.sidebar-menu-navigation .dropdown-menu .').click(function(e) {
 //    e.stopPropagation();
 //   });


$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
  }
  var $subMenu = $(this).next(".dropdown-menu");
  $subMenu.toggleClass('show');


  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.dropdown-submenu .show').removeClass("show");
  });


  return false;
});


 $( function() {
    $( "#draggable" ).draggable({ revert: "invalid" });
    $( "#droppable" ).droppable({
      classes: {
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          // .find( "p" )
          //   .html( "Dropped!" );
             $('#addform-div').removeClass("d-none");
             $('#no-record-main01').addClass("d-none");
      }
    });
 
    $( "#draggable2" ).draggable({ revert: "invalid" });
    $( "#droppable2" ).droppable({
      // accept: "#draggable2",
      classes: {
        "ui-droppable-active": "ui-state-default"
      },
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
      $('#addform-div01').removeClass("d-none");
      $('#no-record-main001').addClass("d-none");
          // .find( "p" )
          //   .html( "Dropped!" );
          //   alert('01');
      }
    });
  } );





 function addnewpopupopen(name) {
    $('#level--popup').modal('show');
}

 function addnewpopupopen01(name) {
    $('#addnewservice-popup01').modal('show');
}

 function addsubpopupopen(name) {
    $('#addsubservice-popup').modal('show');
}


 function addentity(name) {
    $('#level--popup01').modal('show');
}

 function addlavel2(name) {
    $('#level--popup02').modal('show');
}



$( document ).ready(function() {
    $('#level--popup02').on('hidden.bs.modal', function() {
      $('#cards-lavel02').removeClass("d-none");
      $('#no-record-02').addClass("d-none");
      // $('#col-12-md').addClass("col-md-6");
      

    });
});


$( document ).ready(function() {
    $('#level--popup').on('hidden.bs.modal', function() {
      $('#cards-lavel').removeClass("d-none");
      $('#no-record-01').addClass("d-none");
      // $('#col-12-md').addClass("col-md-6");
      

    });
});

 $( function() {
    $( ".column" ).sortable({
      connectWith: ".column",
      handle: ".portlet-header",
      cancel: ".portlet-toggle",
      placeholder: "portlet-placeholder ui-corner-all"
    });
 
    $( ".portlet" )
      .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
      .find( ".portlet-header" )
        .addClass( "ui-widget-header ui-corner-all" )
        .prepend( "<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");
 
    $( ".portlet-toggle" ).on( "click", function() {
      var icon = $( this );
      icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
      icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
    });
  } );




// $( document ).ready(function() {
//     $('#addnewservice-popup').on('hidden.bs.modal', function() {
//       $('#employeedetail--open').removeClass("d-none");
//       $('#no-record-employee').addClass("d-none");
//     });
// });



// $( document ).ready(function() {
//     $('#addnewservice-popup01').on('hidden.bs.modal', function() {
//       $('#col-12-md01').removeClass("d-none");
//       $('#no-record-employee01').addClass("d-none");
//       $('#col-12-md').addClass("col-md-6");
      

//     });
// });


// $( document ).ready(function() {
//     $('#addsubservice-popup').on('hidden.bs.modal', function() {
//       $('#opensubmenu_open').removeClass("d-none");
//       $('#no-record-opensubmenu_open').addClass("d-none");
//     });
// });




$( function() {
 
    // There's the gallery and the trash
    var $gallery = $( "#gallery" ),
      $trash = $( "#trash" );
 
    // Let the gallery items be draggable
    $( "li", $gallery ).draggable({
      cancel: "a.ui-icon", // clicking an icon won't initiate dragging
      revert: "invalid", // when not dropped, the item will revert back to its initial position
      containment: "document",
      helper: "clone",
      cursor: "move"
    });
 
    // Let the trash be droppable, accepting the gallery items
    $trash.droppable({
      accept: "#gallery > li",
      classes: {
        "ui-droppable-active": "ui-state-highlight"
      },
      drop: function( event, ui ) {
        deleteImage( ui.draggable );
      }
    });
 
    // Let the gallery be droppable as well, accepting items from the trash
    $gallery.droppable({
      accept: "#trash li",
      classes: {
        "ui-droppable-active": "custom-state-active"
      },
      drop: function( event, ui ) {
        recycleImage( ui.draggable );
      }
    });
 
    // Image deletion function
    var recycle_icon = "<a href='link/to/recycle/script/when/we/have/js/off' title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>";
    function deleteImage( $item ) {
      $item.fadeOut(function() {
        var $list = $( "ul", $trash ).length ?
          $( "ul", $trash ) :
          $( "<ul class='gallery ui-helper-reset pills-list'/>" ).appendTo( $trash );
          $("#trash .no-record-main").remove();
        $item.find( "a.ui-icon-trash" ).remove();
        $item.append( recycle_icon ).appendTo( $list ).fadeIn(function() {
          $item
            .animate({ width: "100%" })
            .find( ".location-box" )
              .addClass('pills-added');
        });
      });
    }
 
    // Image recycle function
    var trash_icon = "";
    function recycleImage( $item ) {
      $item.fadeOut(function() {
        $item
          .find( "a.ui-icon-refresh" )
            .remove()
          .end()
          .css( "width", "100%")
          .append( trash_icon )
          .find( "img" )
            .css( "height", "72px" )
          .end()
          .appendTo( $gallery )
          .fadeIn();
      });
    }
 
    
 
    // Resolve the icons behavior with event delegation
    $( "ul.gallery > li" ).on( "click", function( event ) {
      var $item = $( this ),
        $target = $( event.target );
 
      if ( $target.is( "a.ui-icon-trash" ) ) {
        deleteImage( $item );
      } else if ( $target.is( "a.ui-icon-zoomin" ) ) {
        viewLargerImage( $target );
      } else if ( $target.is( "a.ui-icon-refresh" ) ) {
        recycleImage( $item );
      }
 
      return false;
    });
  } );





$( function() {
 
    // There's the gallery2 and the trash
    var $gallery2 = $( "#gallery2" ),
      $trash = $( "#trash2" );
 
    // Let the gallery2 items be draggable
    $( "li", $gallery2 ).draggable({
      cancel: "a.ui-icon", // clicking an icon won't initiate dragging
      revert: "invalid", // when not dropped, the item will revert back to its initial position
      containment: "document",
      helper: "clone",
      cursor: "move"
    });
 
    // Let the trash be droppable, accepting the gallery2 items
    $trash.droppable({
      accept: "#gallery2 > li",
      classes: {
        "ui-droppable-active": "ui-state-highlight"
      },
      drop: function( event, ui ) {
        deleteImage( ui.draggable );
      }
    });
 
    // Let the gallery2 be droppable as well, accepting items from the trash
    $gallery2.droppable({
      accept: "#trash2 li",
      classes: {
        "ui-droppable-active": "custom-state-active"
      },
      drop: function( event, ui ) {
        recycleImage( ui.draggable );
      }
    });
 
    // Image deletion function
    var recycle_icon = "<a href='link/to/recycle/script/when/we/have/js/off' title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>";
    function deleteImage( $item ) {
      $item.fadeOut(function() {
        var $list = $( "ul", $trash ).length ?
          $( "ul", $trash ) :
          $( "<ul class='gallery2 ui-helper-reset pills-list'/>" ).appendTo( $trash );
          $("#trash2 .no-record-main").remove();
        $item.find( "a.ui-icon-trash" ).remove();
        $item.append( recycle_icon ).appendTo( $list ).fadeIn(function() {
          $item
            .animate({ width: "100%" })
            .find( ".location-box" )
              .addClass('pills-added');
        });
      });
    }
 
    // Image recycle function
    var trash_icon = "";
    function recycleImage( $item ) {
      $item.fadeOut(function() {
        $item
          .find( "a.ui-icon-refresh" )
            .remove()
          .end()
          .css( "width", "100%")
          .append( trash_icon )
          .find( "img" )
            .css( "height", "72px" )
          .end()
          .appendTo( $gallery2 )
          .fadeIn();
      });
    }
 
    
 
    // Resolve the icons behavior with event delegation
    $( "ul.gallery2 > li" ).on( "click", function( event ) {
      var $item = $( this ),
        $target = $( event.target );
 
      if ( $target.is( "a.ui-icon-trash" ) ) {
        deleteImage( $item );
      } else if ( $target.is( "a.ui-icon-zoomin" ) ) {
        viewLargerImage( $target );
      } else if ( $target.is( "a.ui-icon-refresh" ) ) {
        recycleImage( $item );
      }
 
      return false;
    });
  } );





