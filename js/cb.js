//Enable popovers 
$(function () {
    $('[data-toggle="popover"]').popover({html:true})
})
$('.popover-dismiss').popover({
    trigger: 'focus'
})
  
//Enable flip cards on click 
    //todo
//Set flip cards to same height on front and back
// var frontHeight = $('.flip-card-front').outerHeight();
// var backHeight = $('.flip-card-back').outerHeight();

// if (frontHeight > backHeight) {
//     $('.flip-card, .flip-card-back').height(frontHeight);
// }
// else if (frontHeight < backHeight) {
//     $('.flip-card, .flip-card-front').height(backHeight);
// }
// else {
//     $('.flip-card').height(backHeight);
// }