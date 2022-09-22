export class UserModel{
    // username : string;
    // firstName : string;
    // lastName : string;
    // email : string;
    // password : string;
     contactNum : string;
    
    //username : string;
    firstName : string;
    lastName : string;
    emailId : string;
    password : string;
    contactNo : string;

    id: string;
    // username: string;
    // password: string;
    // emailId: string;
    // firstName: string;
    // lastName: string;
    // contactNo: string;
    imageUrl: string;
    loginId:string;

    // constructor(username, firstName, lastName, email, password, contactNum){
    //     this.username = username;
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.email =  email;
    //     this.password = password;
    //     this.contactNum = contactNum;
    // }

    constructor( firstName, lastName, emailId, password, contactNo, id, imageUrl, loginId){
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId =  emailId;
        this.password = password;
        this.contactNo = contactNo;
        this.id = id;
        this.imageUrl = imageUrl;
        this.loginId = loginId;

    }
}