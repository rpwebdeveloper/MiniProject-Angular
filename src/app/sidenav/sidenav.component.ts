import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../Services/shared.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  selectedValue!: string;
  teams = [
    { name: '=' },
    { name: '<' },
    { name: '>' },
    { name: '<=' },
    { name: '>=' }
  ];

  constructor(private share: SharedService) { }

  ngOnInit(): void {

    this.form.valueChanges.subscribe(data=>{
      this.share.emitData.next(data);
    });
  }

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    start: new FormControl(null, Validators.required),
    end: new FormControl(null, Validators.required),
    options: new FormControl('1'),
    teams: new FormControl(this.teams)
  });

  submit() {

  }

}
