
$(document).ready(function(){
    $('.konsult').on('click',function(event){
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

