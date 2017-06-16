//business logic


// user interface logic
$(document).ready(function(){
  $("form#all-pizza-options").submit(function(event){
    event.preventDefault();



    var arrayOfSelectedToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      var selectedToppings = $(this).val();
      arrayOfSelectedToppings.push(selectedToppings);


// NOTE: just appends and shows the list of toppings into the html element pizza-order-summary  $('#pizza-order-summary').append(selectedToppings + "<br>");
    });

// Only works with the pizza-order-summary append function $("#pizza-order-summary").show();

  });
});
