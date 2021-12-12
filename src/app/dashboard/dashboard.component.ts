import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedService } from '../Services/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  authorData = [];
  finalAuthInfo = [];
  constructor(private share: SharedService) { 
    this.authorData = [{bookName:'Book1',authName:'Author1',priceInfo:'100$',ratingsInfo:'*****'},
    {bookName:'Book2',authName:'Author2',priceInfo:'200$',ratingsInfo:'**'},
    {bookName:'Book3',authName:'Author3',priceInfo:'300$',ratingsInfo:'***'},
    {bookName:'Book4',authName:'Author4',priceInfo:'400$',ratingsInfo:'*'},
    {bookName:'Book5',authName:'Author5',priceInfo:'500$',ratingsInfo:'****'}];
    this.finalAuthInfo = this.authorData;

  }

  ngOnInit(): void {
   
    this.share.emitData.subscribe(d=>{
      this.finalAuthInfo = this.authorData.filter(v=>{
         return d.name == v.bookName || d.price == v.priceInfo;
       });
     });
  }

}
