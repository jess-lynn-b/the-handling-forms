import { FormControl } from "@angular/forms";
import { Observable } from 'rxjs';

export class CustomValidators{
  static invalidProjectName( control: FormControl) : {[s: string]: boolean}{
    if (control.value === 'Test') {
      return {'invalidProjectName': true};
    }
    return {'': false};
  }

  static asyncInvalidProjectName(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Testproject'){
          resolve({'invailidProjectName': true});
        } else {
          resolve(null);
        }
      }, 2000);
    })
    return promise;
  }
}

