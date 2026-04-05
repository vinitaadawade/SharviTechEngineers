import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-component.component.html',
  styleUrl: './contact-component.component.css'
})
export class ContactComponentComponent {

  formData = {
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  };

  submitForm() {
    console.log(this.formData);
    alert('Inquiry submitted successfully!');
  }
}
