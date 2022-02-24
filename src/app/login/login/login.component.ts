
import { Component, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
alert:boolean=true;

  constructor(private http:LoginService,
    private route:Router,private notificationService: NotificationsService,private router: Router ) { }

  ngOnInit(): void {
  }
  formsubmit(f:NgForm){
    console.log(f)
    //if(f.valid){
    //console.log(f)
    //console.log(f.value)
      this.http.login(f.value).subscribe((val:any)=>{
        this.alert = false;
        //let a = JSON.stringify(val)
        localStorage.setItem('token', val.token)
        this.notificationService.success('Login', 'You have logged-in successfully',{
          timeOut: 5000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: false,
          maxLength: 10
        });
        this.router.navigate(['//my-home']);
        },
        error=>{
          this.notificationService.error('Login failed', 'Either username or password is incorrect!',{
            timeOut: 5000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: false,
            maxLength: 10
          });
        }
        
    //  })
    //console.log(f.form.)
)}
  
login(event:any, username:any, password:any) {
  event.preventDefault();
  var success = this.http.login(username,  );
  if (success) {
    console.log(this.route);
    this.route.navigate(['myhome']);
  } else {
    console.log("Login failed, display error to user");
  }
}
      
closeAlert(){
  this.alert=false;
}   

// logout(){
//  this.token= null;

// }

    }
