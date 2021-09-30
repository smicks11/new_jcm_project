import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
 
@Component({
    selector: 'app-contact-section',
    templateUrl: './contact-section.component.html',
    styleUrls: ['./contact-section.component.css']
  })
export class  ContactSectionComponent implements OnInit {
  myForm: FormGroup;
 
  @ViewChild('recaptcha', {static: true }) recaptchaElement: ElementRef;
 
  constructor(private fb: FormBuilder) { }
 
  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(15)]],
    });
    this.addRecaptchaScript();
  }

  validateAllFormFields(formGroup: FormGroup) {         
    Object.keys(formGroup.controls).forEach(field => {  
      const control = formGroup.get(field);             
      if (control instanceof FormControl) {             
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        
        this.validateAllFormFields(control);            
      }
    });
  }

  onSubmit(form: FormGroup) {
    if(this.myForm.valid) {
      console.log('Valid?', form.valid); // true or false
      console.log('Name', form.value.name);
      console.log('Email', form.value.email);
      console.log('Message', form.value.message);

      this.myForm.reset();
    }else{
      this.validateAllFields(this.myForm); 
    }
      
  }

  validateAllFields(formGroup: FormGroup) {         
    Object.keys(formGroup.controls).forEach(field => {  
        const control = formGroup.get(field);            
        if (control instanceof FormControl) {             
            control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {        
            this.validateAllFields(control);  
        }
    });
}
 
  renderReCaptch() {
    window['grecaptcha'].render(this.recaptchaElement.nativeElement, {
      'sitekey' : '6LePbq4UAAAAAPqwJU8u5g1Of1TIEMyoPpJQpyaD',
      'callback': (response) => {
          console.log(response);
      }
    });
  }
 
  addRecaptchaScript() {
    window['grecaptchaCallback'] = () => {
      this.renderReCaptch();
    }
    (function(d, s, id, obj){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { obj.renderReCaptch(); return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaCallback&render=explicit";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'recaptcha-jssdk', this));
  }
}



















// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-contact-section',
//   templateUrl: './contact-section.component.html',
//   styleUrls: ['./contact-section.component.css']
// })




// export class ContactSectionComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
