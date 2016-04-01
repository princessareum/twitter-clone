$(document).ready(function(){
    
    
    var tweetSubmit = $('#tweet-submit');
    var tweetCompose = $('.tweet-compose');
    var charCount = $('#char-count');
    var tweetControls = $('#tweet-controls');
    var tweetActions = $('tweet-actions')


//Text box: button & char. count  visibility  
   tweetCompose.on('click', function(){
        tweetSubmit.css({
            display: 'inline-block'
        });
        $('#tweet-content').children('textarea').css({
            height: "5em"
        });
        tweetControls.children("div").css({
            display: "inline-block"
        });           
    });
    
    
    tweetCompose.blur(function(){
        if(!tweetCompose.val()){
        tweetSubmit.hide();
        tweetCompose.css({
            height: "2.5em"
        });
               
        tweetControls.children("div").css({
            display: "none"
        });  
        }    
    })
    
 
    
//char. countdown    
    tweetCompose.keyup(function(){
    if($(this).val().length >= 140){
        tweetSubmit.prop('disabled', true);
    } if($(this).val().length <= 140){
        tweetSubmit.prop('disabled', false);    
        $(this).val( $(this).val().substr(0, 141));
        charCount.css({
            color: "#999"
        })
    } if ($(this).val().length >= 130){
        charCount.css({
            color: "red"
        })
    }charCount.text(140-$(this).val().length); 
    });
    



// tweet compose
   tweetSubmit.on('click', function(){
       var newTweet = $('.tweet').clone().eq(0);
       var userText = $('.tweet-compose').val();
       var avatar = "img/alagoon.jpg";
       var username = "@supscotty";
       var fullName = "Scotty Scott";
       
       newTweet.find(".tweet-text").html(userText);
       newTweet.find('.avatar').attr('src',avatar);
       newTweet.find(".username").html(username);
       newTweet.find('.fullname').html(fullName);
       
       tweetCompose.val('');
       
       $('#stream').prepend(newTweet);
     
        tweetSubmit.hide();
        tweetCompose.css({
            height: "2.5em"
        });
        tweetControls.children("div").css({
            display: "none"
        });
    })



// $('.tweet').mouseover(function(){
//     $(this).children('.content').children('.tweet-actions').children('ul').css({visibility: 'visible'});
// })

// $('.tweet').mouseleave(function(){
//     $(this).children('.content').children('.tweet-actions').children('ul').css({visibility: 'hidden'});
// })


// mouseover appear/disappear
$(document).on('mouseenter', '.tweet',function(){
 $(this).find('.tweet-actions').css({"visibility": "visible"});
});

$(document).on('mouseleave', '.tweet',function(){
 $(this).find('.tweet-actions').css({"visibility": "hidden"});
});


// click and appear/disappear 

$(document).on('click', '.content', function(){
   $(this).children('.stats').toggle();
}); 
    
    
    


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}); //end of animations.js