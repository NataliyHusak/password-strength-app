import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-strength-tester',
  templateUrl: './password-strength-tester.component.html',
  styleUrls: ['./password-strength-tester.component.css'],
   
})
export class PasswordStrengthTesterComponent {
  password: string = '';


  checkPasswordStrength(): void {
    // No need to calculate strength, only updating the view based on password length
  }
}
