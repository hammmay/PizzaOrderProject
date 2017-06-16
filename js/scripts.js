//Business logic

function Pizza (argument1, argument2){
   this.size = argument1;
   this.toppings = argument2;
   this.price = 10;
}

Pizza.prototype.howPizzaPriceChanges = function() {
  if (this.size === "Small - Table for one" && this.toppings.length < 5) {
    this.price += (this.toppings.length * 2) ;
  }else{
   if (this.size === "Medium - Best when shared with another" && this.toppings.length < 5) {
     this.price += (5+ (this.toppings.length * 2)) ;
   }else{
     if (this.size === "Large - You better have some friends over" && this.toppings.length < 5) {
       this.price += (10 + (this.toppings.length * 2)) ;
     }else{
       if (this.toppings.length >= 5) {
         return alert("You have too many toppings! Seriously, our oven is crazy-tiny and we simply can't layer that much awesome onto one pie. Take off the toppings you don't need to get back down to 4 so we can give you an accurate price.")
     }
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
