import { Component } from '@angular/core';
import { User } from '../../models/User';
import { JobField } from '../../models/jobField';
import { userService } from "../../services/users.service"
import { MainComponent } from '../main/main.component'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  constructor(private userservice: userService) {

  }

  user: User = {
    id: "",
    name: "",
    password: "",
    fields: JobField.BackEnd,
  }



  saveUser() {
    if(this.isValidPassword()){
      this.userservice.getUser(this.user.name, this.user.password);
      // MainComponent.nameCurrentUser();
    }
    else
    alert("invalid password");
  }

  isValidPassword() {
    if (this.user.password.length < 8) {
      return false;
    }
    if (this.user.password.includes(" ")) {
      return false;
    }
    return true;

  }

}
