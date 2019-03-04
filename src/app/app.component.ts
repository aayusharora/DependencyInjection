import { MainService } from './main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MainService]
})
export class AppComponent implements OnInit {
  constructor(private service: MainService) {}
  title = 'myapp';

  ngOnInit(){
    console.log(this.service.getEndpoint());
 }

}
