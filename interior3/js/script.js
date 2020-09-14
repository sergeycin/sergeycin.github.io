
$(document).ready(function(){
    $('.window').on('click',function(event){
        event.preventDefault();
        $('.content-modal').fadeIn();
    });
    $('.popup-close').on('click',function(event){
        event.preventDefault();
        $('.content-modal').fadeOut();
    })
 
   
});
$(document).ready(function(){
    $('#modal-btn').on('click',function(event){
        event.preventDefault();
        $('.popup').fadeIn();
    });
    $('.popup-close').on('click',function(event){
        event.preventDefault();
        $('.popup').fadeOut();
    })
 
   
});
$(document).ready(function(){
    $('#read').on('click',function(event){
        event.preventDefault();
        $('.hd').css('display', 'block');
        $('#read-close').css('display', 'block');
        $('#read').css('display', 'none');
    });
    $('#read-close').on('click',function(event){
        event.preventDefault();
        $('.hd').css('display', 'none');
        $('#read-close').css('display', 'none');
        $('#read').css('display', 'block');
    })
 
   
});
$(document).ready(function(){
    $('#read2').on('click',function(event){
        event.preventDefault();
        $('.hd2').css('display', 'block');
        $('#read-close2').css('display', 'block');
        $('#read2').css('display', 'none');
    });
    $('#read-close2').on('click',function(event){
        event.preventDefault();
        $('.hd2').css('display', 'none');
        $('#read-close2').css('display', 'none');
        $('#read2').css('display', 'block');
    })
 
   
});
$(document).ready(function(){
    $('#read3').on('click',function(event){
        event.preventDefault();
        $('.hd3').css('display', 'block');
        $('#read-close3').css('display', 'block');
        $('#read3').css('display', 'none');
    });
    $('#read-close3').on('click',function(event){
        event.preventDefault();
        $('.hd3').css('display', 'none');
        $('#read-close3').css('display', 'none');
        $('#read3').css('display', 'block');
    })
 
   
});
$(document).ready(function(){
    $('#read4').on('click',function(event){
        event.preventDefault();
        $('.hd4').css('display', 'block');
        $('#read-close4').css('display', 'block');
        $('#read4').css('display', 'none');
    });
    $('#read-close4').on('click',function(event){
        event.preventDefault();
        $('.hd4').css('display', 'none');
        $('#read-close4').css('display', 'none');
        $('#read4').css('display', 'block');
    })
 
   
});
$(document).ready(function(){
    $('#read5').on('click',function(event){
        event.preventDefault();
        $('.hd5').css('display', 'block');
        $('#read-close5').css('display', 'block');
        $('#read5').css('display', 'none');
    });
    $('#read-close5').on('click',function(event){
        event.preventDefault();
        $('.hd5').css('display', 'none');
        $('#read-close5').css('display', 'none');
        $('#read5').css('display', 'block');
    })
 
   
});
$(document).ready(function(){
    $('#read6').on('click',function(event){
        event.preventDefault();
        $('.hd6').css('display', 'block');
        $('#read-close6').css('display', 'block');
        $('#read6').css('display', 'none');
    });
    $('#read-close6').on('click',function(event){
        event.preventDefault();
        $('.hd6').css('display', 'none');
        $('#read-close6').css('display', 'none');
        $('#read6').css('display', 'block');
    })
 
   
});
$(document).ready(function(){
    $('.part').on('mouseenter',function(event){
        event.preventDefault();
        $('.part-black').css('display', 'block');
     
    });
    $('.part').on('mouseleave',function(event){
        event.preventDefault();
        $('.part-black').css('display', 'none');
    
    })
 
   
});
$(document).ready(function(){
    $('.part2').on('mouseenter',function(event){
        event.preventDefault();
        $('.part-black2').css('display', 'block');
     
    });
    $('.part2').on('mouseleave',function(event){
        event.preventDefault();
        $('.part-black2').css('display', 'none');
    
    })
 
   
});
$(document).ready(function(){
    $('.part3').on('mouseenter',function(event){
        event.preventDefault();
        $('.part-black3').css('display', 'block');
     
    });
    $('.part3').on('mouseleave',function(event){
        event.preventDefault();
        $('.part-black3').css('display', 'none');
    
    })
 
   
});
$(document).ready(function(){
    $('.part4').on('mouseenter',function(event){
        event.preventDefault();
        $('.part-black4').css('display', 'block');
     
    });
    $('.part4').on('mouseleave',function(event){
        event.preventDefault();
        $('.part-black4').css('display', 'none');
    
    })
 
   
});
$(document).ready(function(){
    $('.work-btn').on('click',function(event){
        event.preventDefault();
        $('.popup-work').fadeIn();
    });
    $('.popup-close-work').on('click',function(event){
        event.preventDefault();
        $('.popup-work').fadeOut();
    })
 
   
});
$(document).ready(function(){
    $('.work-btn-B').on('click',function(event){
        event.preventDefault();
        $('.photoone').fadeIn();
     
    });
    $('.photoone-close').on('click',function(event){
        event.preventDefault();
        $('.photoone').fadeOut();
    })
 
   
});
$(document).ready(function(){
    $('.work-btn-C').on('click',function(event){
        event.preventDefault();
        $('.phototwo').fadeIn();
      
    });
    $('.phototwo-close').on('click',function(event){
        event.preventDefault();
        $('.phototwo').fadeOut();
    })
 
   
});

$('.form').submit(function(event){
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        alert("Спасибо за заказ.Мы вам перезвоним!");
        $("form").trigger("reset");
    });
    return false;
     });

