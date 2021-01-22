// https://github.com/Roufun/assignment3

//------Problem:1, kilometer To Meter------
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(5);
console.log("Meter= ", result);




 //------Problem:4, megaFriend ------ 
 function megaFriend(friendsName){
    var nameLength = 0;
    
    for (var i = 0; i < friendsName.length; i++) {
      if (friendsName[i].length > nameLength) {
        var nameLength = friendsName[i].length;
        var longestName = friendsName[i];
      }
    }
    return longestName;
}
  
var friendsName = ["Alomgir", "Rony", "Jaforullah", "Apurbo"];
var finalLongestName = megaFriend(friendsName);

console.log(finalLongestName);




//----------- Problem:3,  Hotel Cost ------
function hotelCost(day){
    var totalRent;
    if(day > 0){              //Preventing negative input.
        if (day <= 10){
            totalRent = day * 10;
            return totalRent;
        }
        else if(day <= 20){
            day = day - 10;
            totalRent = ((day * 80) + 1000);
            return totalRent;
        }
        else if(day > 20){
            day = day - 20;
            totalRent = ((day * 50) + 1800);
            return totalRent;
        }
    }
    else{
        return "Invalid Input!. Please provide a positive value."
    }
}
