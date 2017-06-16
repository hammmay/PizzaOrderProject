//business logic

function Pizza (argument1, argument2){
   this.size = argument1;
   this.toppings = argument2;
   this.price = 10;
}



// user interface logic
$(document).ready(function(){
  $("form#all-pizza-options").submit(function(event){
    event.preventDefault();

    $("#pizza-order-summary span").each(function() {
      $(this).empty();
    });

    var checkedSize = $("input[name='size-of-pizza']:checked").val();
    var arrayOfSelectedToppings = [];
    $("input:checkbox[name=toppings-on-pizza]:checked").each(function(){
      var selectedToppings = $(this).val();
      arrayOfSelectedToppings.push(selectedToppings);
    });

    var myPizza = new Pizza (checkedSize, arrayOfSelectedToppings);

    $(".size-output").append(myPizza.size);
    $(".toppings-output").append(myPizza.toppings);

    $("#pizza-order-summary").show();


  });
});
