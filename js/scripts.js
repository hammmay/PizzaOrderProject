//business logic

function Ticket (argument1, argument2){
   this.size = argument1;
   this.toppings = argument2;
   this.price = 10;
}


// user interface logic
$(document).ready(function(){
  $("form#all-pizza-options").submit(function(event){
    event.preventDefault();

    var checkedSize = $("input[name='size-of-pizza']:checked").val();
    var arrayOfSelectedToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      var selectedToppings = $(this).val();
      arrayOfSelectedToppings.push(selectedToppings);

    var myPizza = new Pizza(checkedSize, arrayOfSelectedToppings);


// NOTE: just appends and shows the list of toppings into the html element pizza-order-summary  $('#pizza-order-summary').append(selectedToppings + "<br>");
    });

// Only works with the pizza-order-summary append function $("#pizza-order-summary").show();

  });
});
