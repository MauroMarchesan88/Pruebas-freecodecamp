var count = 0;

function cc(card) {
  // Only change code below this line
  switch(card){
    case "J":
    case "Q":
    case "K":
    case "A":
    case 10:
      count --
      break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count ++
      break;
  }

  if(count <= 0)  {
    var final = count + " Hold"
  } else {
    var final = count + " Bet"
  }
return final
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
