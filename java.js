var amount; 
var days = ["Monday","Tuesday","Wedsnday","Thursday","Friday","Saturday","Sunday"];
Monday = prompt("Enter the total sales for Monday");
Monday = Number(Monday);
Tuesday = prompt("Enter the total sales for Tuesday");
Tuesday = Number(Tuesday);
Wednesday = prompt("Enter the total sales for Wednesday");
Wednesday = Number(Wednesday);
Thursday = prompt("Enter the total sales for Thursday");
Thursday = Number(Thursday);
Friday = prompt("Enter the total sales for Friday ");
Friday = Number(Friday);
Saturday = prompt("Enter the total sales for Saturday");
Saturday = Number(Saturday);
Sunday = prompt("Enter the total sales for Sunday");
Sunday = Number(Sunday);
amount = (Monday + Tuesday + Wednesday + Thursday + Friday + Saturday + Sunday);
document.write(amount);


