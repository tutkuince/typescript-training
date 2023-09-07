import {CricketCoach} from "./CricketCoach";
import {GolfCoach} from "./GolfCoach";
import {Coach} from "./Coach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

// declare an array for coaches. initially empty
let coachList: Coach[] = [];


// add the coaches to the array
coachList.push(myCricketCoach);
coachList.push(myGolfCoach);

for (let tempCoach of coachList) {
    console.log(tempCoach.getDailyWorkout());
}