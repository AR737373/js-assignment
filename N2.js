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