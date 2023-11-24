import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { WfhService } from './wfh.service';
import { WfhRequest } from './wfhrequest';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Work from Home';
  // public defaultFromTime: string = '08:00';
  // public defaultToTime: string = '17:15';
  public currentDate: string = 'yyyy-MM-dd';

  constructor(private wfhService: WfhService) {}

  ngOnInit() {
    this.getCurrentDate();
  }

  public getCurrentDate(): void {
    this.wfhService.getCurrentDate().subscribe(
      (response: string) => {
        this.currentDate = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onClickSubmit(wfhRequestForm: NgForm): void {
    console.log(wfhRequestForm.value);
    this.wfhService.submitRequest(wfhRequestForm.value).subscribe(
      (response: WfhRequest) => {
        console.log(response);
        wfhRequestForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        wfhRequestForm.reset();
      }
    );
  }

}
