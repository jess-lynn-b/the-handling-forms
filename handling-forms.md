# Why do we need Angular's Help? #

   This allows us to retrieve the information to help us create a input and output to retireve user information. This also ensures that the user input the correct information that was being requested. This is usually done in TS/JS. Allows us to store key values to make the input of information easier to use. Also holds in some meta data to ensure that the infomation entered is valid and if not it will display an error.

 # Template- Driven (TD)
    Set up the form in the template HTML code and then Angular infers the Form Object from the DOM. More user friendly and easier to get started.

 # Reactive Approach
    More Complex and the form is created with TS and programmatically and synchronized with the DOM.

# Understanding the Form State
    The form handling by Angular allows us to store a lot of different properties and values. Also allows us to understand what it is controling for the information needed in the form. The ngForm holds alot of properties and they will tell you in any information has been added or is missing as well as any errors, etc.  

# Adding Validation to check input

    Adding required at the end of the input information of the HTML doc. This will ensure that all information is needed inorder to submit the form.

# Built in Validatiors...
  Check out the Validators class: https://angular.io/api/forms/Validators - these are all built-in validators, though that are the methods which actually get executed (and which you later can add when using the reactive approach).

  For the template-driven approach, you need the directives. You can find out their names, by searching for "validator" in the official docs: https://angular.io/api?type=directive - everything marked with "D" is a directive and can be added to your template.

  Additionally, you might also want to enable HTML5 validation (by default, Angular disables it). You can do so by adding the ngNativeValidate to a control in your template.

# Using the form state

    Add a warning to ensure that all forms are filled out. Do this by adding [disabled]="!f.valid" to the submit button at bottom. 

    Then move to css to style it: 
    input.ng-invalid.ng-touched{
    border: 1px solid red;
    }

    This will make it to where once the line is clicked if no information is entered the box will be red to show that something must be entered in order to submit.

    
