// developer: Harshad Patil

let users = {
    getFullName:function() {
      return this.name + " " + this.lastName;
    },
    getAge:function() {
      let age = new Date().getFullYear() - this.birth;
      return age
    }
  }
  
  let student = {
    name: "Harshad",
    lastName: "Patil",
    birth:2000,
  }
  
  let teacher = {
    name: "Aarti",
    lastName: "Phatak",
    birth:1986,
  }
  
  student.__proto__=users;
  teacher.__proto__=users;
  
  console.warn(student.getAge())
  console.warn(teacher.getAge())