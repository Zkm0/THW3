var foodItems = [];
class FoodItem {
    constructor(foodName, calories) {
        this.foodName = foodName;
        this.calories = calories;
    }

    
};

function totalCalories() {
    let foodName = document.getElementById("foodName").value;
    let calories = parseInt(document.getElementById("calorie").value);
    document.getElementById("foodName").value = "";
    document.getElementById("calorie").value = "";
    let foodItem = new FoodItem(foodName, calories);
    foodItems.push(foodItem);
    let totalCal = 0;
    for (var i = 0; i < foodItems.length; i++) {
        let item = foodItems[i];
        totalCal += item.calories;
    }
    document.getElementById("totalCalories").value = totalCal;
    console.log(foodItems);
    

    
}



