import { Component, OnInit } from '@angular/core';
import { CV } from '../cv';

@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.css']
})
export class CvFormComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  cv: CV = {
    name: '',
    address: '',
    contact: '',
    experience: '',
    objectives: '',
    skills: '',
    fileType: ''
  };

  submitForm(form: any) {
    console.log(this.cv);
    // code to send the form data to the back-end API would go here
  }

}
