
$(document).ready(function(e){
/**var head= $('.ms-viewheadertr'),
    headText = head.html();
    //**Takking the headers out as thead elements
    head.parent().parent().prepend('<thead>'+headText+'</thead>');
    head.remove();

  var stackedTable = $('table#onetidMngFieldRptrTable, table#onetidMngCytpeRptrTable'),
      headings = new Array(),
      headingCount = 0;
      
      stackedTable.find('tbody tr th').each(function(e){
      headings[headingCount] = $(this).text();
      // stackedTable.find('tr').not('first-child').each(function(e){
        
        var   countIterator = 0;
        $(this).find('tr td.ms-vb2').each(function(e){
            var fieldValue = $(this).html();
            $(this).html('<span class="field-name">'+ headings[countIterator] + '</span> ' + fieldValue);
            countIterator++;
            console.log('countIterator: ' + countIterator + 'headings[countIterator]: ' + headings[countIterator]);
        });
      //});
      headingCount++;
    }).parent().remove();

  




  var $sptableList = $("table.ms-listviewtable > tbody");
  var $headers = $sptableList.find("> tr.ms-viewheadertr > th");
  var $items = $sptableList.find("> tr.ms-itmhover");
  $items.each(function() {
    $item = $(this);
    var counter = 0;
    $cols = $item.find(" > td");
    $cols.each(function() {
      $mobileHeader = $("<div class='mob-header'></div>");
      $mobileHeader.append($($headers[counter]).html());
      $(this).prepend($mobileHeader);
      counter++;
    });
  });**/
<<<<<<< HEAD
var table = $('#main-content table'),
=======
var notie8 = $('html').not('.no-ie8compat').find,
    table = notie8('#main-content table'),
>>>>>>> c9bff514aa040f94ea6cdac00010f4b1eb275f72
    heading = {
        number: null,
        value: null
    },
<<<<<<< HEAD
    counter = 1;
    var headings= new Array();
    
    $('#main-content tbody th').each(function(e){
=======

    counter = 1;
    var headings= new Array();
    
    notie8('#main-content tbody th').each(function(e){
>>>>>>> c9bff514aa040f94ea6cdac00010f4b1eb275f72
        var value = $(this).text();
        
        heading.number = counter;
        heading.value = value;
        
        headings[counter] = heading;
        
        table.find('tr > td.ms-vb2:nth-child('+heading.number+')').prepend('<span class="fieldName">'+heading.value+'</span>');
        
        counter++;
    });

    // Stacked table approach

<<<<<<< HEAD
    var tableTitle = $('.ms-vb-title');
=======
    var tableTitle = notie8('.ms-vb-title');
>>>>>>> c9bff514aa040f94ea6cdac00010f4b1eb275f72

    tableTitle.each(function(e){
        var titleHtml = $(this).text();
        titleHtml = $.trim(titleHtml);
      
        var thisParent = $(this).parent();
        thisParent.before('<tr class="accordion-title"><td><div class="header-table">'+titleHtml+'</div></td></tr>');
        //thisParent.hide();
        

    });

<<<<<<< HEAD
    $('.accordion-title')
          .on({
            click: function(){

              $('.accordion-title').not(this).removeClass('active').next().slideUp(100);
=======
    notie8('.accordion-title')
          .on({
            click: function(){

              notie8('.accordion-title').not(this).removeClass('active').next().slideUp(100);
>>>>>>> c9bff514aa040f94ea6cdac00010f4b1eb275f72



              $(this).toggleClass("active").next().slideToggle(200);
              
            }
          });

      var resetTable = function(e){

        var windowSize = $(window).width();
        if (windowSize > 768) {
          //Little fix to avoid display block while showing the element
<<<<<<< HEAD
           $('.ms-itmhover').show(100,function(e){$(this).removeAttr('style');});
               
        }else{
          $('.accordion-title').next().slideUp(100);
=======
           notie8('.ms-itmhover').show(100,function(e){$(this).removeAttr('style');});
               
        }else{
          notie8('.accordion-title').next().slideUp(100);
>>>>>>> c9bff514aa040f94ea6cdac00010f4b1eb275f72
        }
      }
      resetTable();
      $(window).resize(function(e){ resetTable(); });


      // Dialog sizes

/**
=======

      var width = $('.ms-dialog #main-content').width();

      $('.ms-dlgFrameContainer').css({
        width: width + '!important',
      })   **/ 
});

