console.log("\nQuestion 1 Answer:\n");

function describeValue(value){
    let type=typeof value;
    let result;
    if(value){
        result="truthy";
    }
    else{
        result="falsy";
    
    }
    return type +" | "+result;
}

console.log(describeValue("hello"));
console.log(describeValue(""));
console.log(describeValue(25));
console.log(describeValue(0));
console.log(describeValue(true));
console.log(describeValue(null));
console.log(describeValue(undefined));


// Q2---------------------------------------
console.log("\nQuestion 2 Answer:\n");


function getDayType(value){
    let day=value.toLowerCase();
    switch(day){
        case "friday":
            case "saturday":
                return "Weekend";

                case "sunday":
                    case "monday":
                        case "tuesday":
                            case "wednesday":
                                case "thursday":
                                    return "Workday";

                                    default: return "Invalid Day";
    }
}

console.log(getDayType("Friday"));
console.log(getDayType("friday"));
console.log(getDayType("MONDAY"));
console.log(getDayType("Bandarban"));

// Q3===================================================
console.log("\nQuestion 3 Answer:\n");

function validateUsername(value){
    let username= value;
    if(username.length<4){
        return "Too Short";
    }
    else if(username.includes(" ")){
        return "No Space Allowed";
    }
    else if(username.toLowerCase().includes("admin")){
        return "Reserved Word";
    }
    else{
        return "Available";
    }
}

console.log(validateUsername("rahim123"));
console.log(validateUsername("ab"));
console.log(validateUsername("a b"));
console.log(validateUsername("abcd"));
console.log(validateUsername("rahim islam"));
console.log(validateUsername("superadmin99"));
console.log(validateUsername("Admin_Rahim"));

// Q4___________________________________________________________
console.log("\nQuestion 4 Answer:\n");

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let fare;
  if (distance <= 2) {
    fare = 50;
  } else {
    fare = 50 + (distance - 2) * 15;
  }
  fare = fare + waitingMinutes * 2;
  if (isNight) {
    fare = fare + fare * 0.2;
  }
  return fare;
}
console.log(getCngFare(2));
console.log(getCngFare(1));
console.log(getCngFare(5));
console.log(getCngFare(10)); 
console.log(getCngFare(5,false,10));
console.log(getCngFare(5,true));        
console.log(getCngFare(5,true,10));

// Q5*************************************************
console.log("\nQuestion 5 Answer:\n");

function getChaseVerdict(target,scored,ballsLeft) {
    let runsNeeded = target - scored;
    if (runsNeeded <= 0) {
        return "Won";
    }
    else if (ballsLeft <= 0) {
        return "Lost";
    }

    let requiredRate = (runsNeeded / ballsLeft) * 6;

    if (requiredRate <= 6) {
        return "Need " + runsNeeded + " runs in " + ballsLeft + " balls | Comfortable";
    } 
    
    else if (requiredRate <= 12) {
        return "Need " + runsNeeded + " runs in " + ballsLeft + " balls | Tough";
    } 
    
    else {
        return "Need " + runsNeeded + " runs in " + ballsLeft + " balls | Almost Impossible";
    }
}

console.log(getChaseVerdict(200, 200, 12));
console.log(getChaseVerdict(200, 190, 0));	
console.log(getChaseVerdict(100, 90, 12));
console.log(getChaseVerdict(100, 80, 12));
console.log(getChaseVerdict(100, 70, 12));
console.log(getChaseVerdict(150, 149, 1));