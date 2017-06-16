//Business logic

function Pizza (argument1, argument2){
   this.size = argument1;
   this.toppings = argument2;
   this.price = 10;
}

Pizza.prototype.howPizzaPriceChanges = function() {
  if (this.size === "Small - Table for one") {
    this.price += (this.toppings.length * 2) ;
  }else{
   if (this.size === "Medium - Best when shared with another") {
     this.price += (5+ (this.toppings.length * 2)) ;
   }else{
     if (this.size === "Large - You better have some friends over") {
       this.price += (10 + (this.toppings.length * 2)) ;
       }
     }
   }
   return this.price;
 }

// UI logic
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

    $(".price-output").append(myPizza.howPizzaPriceChanges());


    $("#pizza-order-summary").show();


  });
});
