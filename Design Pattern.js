class Student{
    static count=0
    constructor(name,age,phone_number,board_marks){
      Student.count+=1
      this.name=name;
      this.age=age;
      this.phone_number=phone_number;
      this.board_marks=board_marks;
    }
  total(){
    console.log(Student.count)
  }
  egligibleforplacement(minMarks){
    return (minPlacementAge)=>{
      if(this.board_marks>minMarks && this.age>minPlacementAge){
        console.log(this.name + " is ready for placements")
      }
  }
  }
  
  }
  var Ram=new Student('Ram',22,9856854752,60)
  Ram.egligibleforplacement(40)(21)
  var Radha=new Student('Radha',20,9685475896,60)
  Radha.egligibleforplacement(40)(21)
  var Karan=new Student('Karan',25,9854756895,50)
  Karan.egligibleforplacement(40)(21)
  var Mohan=new Student('Mohan',23,9658748547,30)
  Mohan.egligibleforplacement(40)(21)
  var Abhishek=new Student('Abhishek',24,9685789658,80)
  Abhishek.egligibleforplacement(40)(21)
  Ram.total()