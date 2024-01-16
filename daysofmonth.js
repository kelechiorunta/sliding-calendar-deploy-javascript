var days = 0;
export const numberofdays = (currentmonth, currentyear) =>{
 switch(currentmonth){
    case 1:{
        days = 31;
        break;
    }
    case 2:{
        if(currentyear % 4 ===0){
            days =  29;
            break;
        }
        else
            days =  28;
            break;
    }
    case 3:{
        days = 31;
        break;
    }
    case 4:{
        days = 30;
        break;
    }
    case 5:{
        days = 31;
        break;
    }
    case 6:{
        days = 30;
        break;
    }
    case 7:{
        days = 31;
        break;
    }
    case 8:{
        days = 31;
        break;
    }
    case 9:{
        days = 30;
        break;
    }
    case 10:{
        days = 31;
        break;
    }
    case 11:{
        days = 30;
        break;
    }
    case 12:{
        days = 31;
    }
    default:{
        days = days;
    }

 }
 return days
}