class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
class Employee extends Person{
    constructor(name, age, role, contact){
        super(name, age);
        this.role = role;
        this.contact = contact;
    }

    getDetails(){
        console.log('The details of the Employee are:\n\nName:',this.name,'\nAge:',this.age,'\nRole:',this.role,'\nPhone:',this.contact)
    }
}
obj=new Employee('Beron',24,'Technology Analyst',9001234567)
obj.getDetails();