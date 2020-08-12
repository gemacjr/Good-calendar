import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  selectedDates: string[];

  monthOne = [];
  

  weekOne = [
    
      {"dateKey":"12/29/2021","dateNumber":"29","dayOfWeek":"SUN","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
       {"dateKey":"12/30/2020","dateNumber":"30","dayOfWeek":"MON","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
      {"dateKey":"12/31/2020","dateNumber":"31","dayOfWeek":"TUE","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
      {"dateKey":"01/01/2021","dateNumber":"01","dayOfWeek":"WED","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
     {"dateKey":"01/02/2021","dateNumber":"02","dayOfWeek":"THU","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
       {"dateKey":"01/03/2021","dateNumber":"03","dayOfWeek":"FRI","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
      {"dateKey":"01/04/2021","dateNumber":"04","dayOfWeek":"SAT","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
    
    
     {"dateKey":"01/05/2021","dateNumber":"05","dayOfWeek":"SUN","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
       {"dateKey":"01/06/2021","dateNumber":"06","dayOfWeek":"MON","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
     {"dateKey":"01/07/2021","dateNumber":"07","dayOfWeek":"TUE","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
       {"dateKey":"01/08/2021","dateNumber":"08","dayOfWeek":"WED","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
       {"dateKey":"01/09/2021","dateNumber":"09","dayOfWeek":"THU","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
      {"dateKey":"01/10/2021","dateNumber":"10","dayOfWeek":"FRI","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
     {"dateKey":"01/11/2021","dateNumber":"11","dayOfWeek":"SAT","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
   
    
      {"dateKey":"01/12/2021","dateNumber":"12","dayOfWeek":"SUN","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
       {"dateKey":"01/13/2021","dateNumber":"13","dayOfWeek":"MON","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
     {"dateKey":"01/14/2021","dateNumber":"14","dayOfWeek":"TUE","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
       {"dateKey":"01/15/2021","dateNumber":"15","dayOfWeek":"WED","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
       {"dateKey":"01/16/2021","dateNumber":"16","dayOfWeek":"THU","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
      {"dateKey":"01/17/2021","dateNumber":"17","dayOfWeek":"FRI","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
      {"dateKey":"01/18/2021","dateNumber":"18","dayOfWeek":"SAT","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
    
    
     {"dateKey":"01/19/2021","dateNumber":"19","dayOfWeek":"SUN","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
       {"dateKey":"01/20/2021","dateNumber":"20","dayOfWeek":"MON","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
      {"dateKey":"01/21/2021","dateNumber":"21","dayOfWeek":"TUE","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
       {"dateKey":"01/22/2021","dateNumber":"22","dayOfWeek":"WED","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
      {"dateKey":"01/23/2021","dateNumber":"23","dayOfWeek":"THU","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
      {"dateKey":"01/24/2021","dateNumber":"24","dayOfWeek":"FRI","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
      {"dateKey":"01/25/2021","dateNumber":"25","dayOfWeek":"SAT","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
    
    
     {"dateKey":"01/26/2021","dateNumber":"26","dayOfWeek":"SUN","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
      {"dateKey":"01/27/2021","dateNumber":"27","dayOfWeek":"MON","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
      {"dateKey":"01/28/2021","dateNumber":"28","dayOfWeek":"TUE","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
       {"dateKey":"01/29/2021","dateNumber":"29","dayOfWeek":"WED","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
      {"dateKey":"01/30/2021","dateNumber":"30","dayOfWeek":"THU","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
       {"dateKey":"01/31/2021","dateNumber":"31","dayOfWeek":"FRI","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
      {"dateKey":"02/01/2021","dateNumber":"01","dayOfWeek":"SAT","isSelected":false,"isPast":true,"isSunday":false,"isHoliday":false},
    
  
    
  ]

  days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];


  constructor() { }

  ngOnInit(): void {
    this.weekOne;
    
    this.days;
   
 this.transformArray(this.weekOne);
    this.selectedDates = new Array<string>();
  
  }

  getDateId(e:any, dateId:string){

    console.log()
    if(e.target.checked) {
      console.log(dateId + ' is Checked');
      this.selectedDates.push(dateId);

    } else {
      console.log(dateId + 'unChecked');
      this.selectedDates = this.selectedDates.filter(m=>m!=dateId)
    }
    console.log("The array of closure Dates " + this.selectedDates )
  }

transformArray(weekOne){
console.log(typeof weekOne);

let weekOneArray =[]
let weekTwoArray=[]
let weekThreeArray=[]
let weekFourArray=[]
let weekFiveArray=[]




 weekOneArray = weekOne.splice(0, 7)
weekTwoArray = weekOne.splice(0, 7)
 weekThreeArray = weekOne.splice(0,7)
 weekFourArray = weekOne.splice(0, 7)
 weekFiveArray = weekOne.splice(0,7)





// this.monthOne = [SUN,MON,TUE,WED,THU,FRI,SAT]

this.monthOne = [weekOneArray, weekTwoArray, weekThreeArray, weekFourArray, weekFiveArray]


console.log(this.monthOne)

return this.monthOne;

}

}
