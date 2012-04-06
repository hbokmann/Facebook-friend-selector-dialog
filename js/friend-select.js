//Selecting and unselecting friends
$('ul').on("click", "li", function(){
    var $this = $(this);
    if($this.hasClass("selected")){
        $this.toggleClass("selected");
    }else{
        $('ul').find('li.selected').toggleClass('selected');
        $this.toggleClass("selected");
    }
});  

// Search for friends
$('.find').keyup(function() {
    $('ul').find('li').hide();
    $('li').each(function(index) {
        $id = $(this).attr('data-id');
        $name = $(this).attr('data-name');
        if($name.search(new RegExp($('.find').val(), 'i')) != -1) {
            $('ul').find('li[data-id="'+$id+'"]').show();
        }
    });
});

//Submit a friend
$('.submit').on('click', function() {
    $('ul').find('li.selected').each(function() {
        var $id = 0;
        $id = $(this).attr('data-id');
        process($id);
    })
}); 

//Cloce when cancelling
$('.cancel').on('click', function () {
  $('.facebook-friends').fadeOut(200, function() { $(this).remove(); });
  });

//Close after pushing escape
$(document).on('keydown', function(e){
    if (e.keyCode == 27) {
        $('.facebook-friends').fadeOut(200, function() { $(this).remove(); });
    };
});