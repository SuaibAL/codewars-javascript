/*
Problem:
Given an age, return what the person drinks based on their age.

My approach:
1. Create a function that takes age as a parameter.
2. Check if the age is under 14.
   → return "drink toddy"
3. If not, check if the age is under 18.
   → return "drink coke"
4. If not, check if the age is under 21.
   → return "drink beer"
5. Otherwise, the age is 21 or more.
   → return "drink whisky"

Important:
I used if → else if → else because only one condition needs to match.
*/

function peopleWithAgeDrink(old) {
  if (old < 14 ){
    return "drink toddy";
  }
  else if (old < 18){
    return "drink coke";
  }
  else if (old < 21){
    return "drink beer";
  }
  else{
    return "drink whisky";
  }
}
