"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GolfCoach_1 = require("./GolfCoach");
let myCricketCoach = new CricketCoach_1.CricketCoach();
let myGolfCoach = new GolfCoach_1.GolfCoach();
// declare an array for coaches. initially empty
let coachList = [];
// add the coaches to the array
coachList.push(myCricketCoach);
coachList.push(myGolfCoach);
for (let tempCoach of coachList) {
    console.log(tempCoach.getDailyWorkout());
}
