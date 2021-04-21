import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from './service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'angular Tutorial App';
  subTitle= 'wo shi shui'
  showUser: boolean = true;
  jsonValue = {

  }

  favColorControl = new FormControl('');
profileForm = new FormGroup({
  firstName: new FormControl('',Validators.min(2)),
  lastName:new  FormControl('')
})

  constructor(private httpService: HttpService, private router: Router, private fb: FormBuilder){
      // this.router.events.subscribe((e) =>{
      //   console.log(e);
      // })
  }

  addressForm =    this.fb.group({
    street: [''],
    city: [''],
    state: [''],
    zip: ['']
  })
  ngOnInit(): void {
    this.getPosts();
  }

  user = {
    name:"Lewis Cao",
    age:"12",
    id:0,
    isColored: true,

  }
  scPosts: any = this.httpService.getRequest('http://jsonplaceholder.typicode.com/posts');


   posts: any = []
  handleUserEvent(event:any){
      console.log(event);
  }

  handleEvent(){
    this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/1')
    .subscribe((response) => {
    
      this.jsonValue = response;
    });
  }

  getPosts(): any {
    this.httpService.getRequest('http://jsonplaceholder.typicode.com/posts')
      .subscribe((response) => {
        console.log(response)
        this.posts = response;
      })
  }

  goToRoute(route: string = '/forth'): void{
    this.router.navigateByUrl(route).then(()=>{
      console.log(this.router.url);
    })
  }
}
