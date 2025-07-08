export class User{
    constructor(username, password){
        this.username=username;
        this.password=password
    }
    validate(uname,pswd){
        if ((this.username === uname) && (this.password === pswd)){
            return "Login Successful";
        }
        return "Unauthorized access";
    }
}