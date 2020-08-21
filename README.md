# Template-Engine-Employee-Summary
Application that generates an HTML webpage to display a software engineering team.  Application ideally will pass unit tests.

# lib folder - for classes and helper code
- 4 classes: Employee, Manager, Engineer, Intern

1. EMPLOYEE class - PARENT CLASS! Properties and methods include:
 * name
 * id
 * title
 * getName()
 * getID()
 * getEmail()
 * getRole() // Returns 'Employee'
 
2. MANAGER class - extend Employee class
 * will have all of the above properties for Employee class, plus the below properties and methods:
  + officeNumber
  + getRole // Overridden to return 'Manager'

3. ENGINEER class - extend Employee class
 * will have all of the above properties for Employee class, plus the below properties and methods:
  + github // GitHub usernam
  + getGitHub()
  + getRole // Overridden to return 'Manager'

4. INTERN class - extend Employee class
 * will have all of the above properties for Employee class, plus the below properties and methods:
  + school
  + getSchool()
  + getRole() // Overridden to return 'Intern'

# Output - rendered output
 * Team HTML - nicely formatted team roster
   + Name
   + Role
   + ID
   + Role-specific property (School, link to GitHub profile, or office number)

# Templates - HTML template for each type of user
 * Use the following templates:
  + main.html
  + engineer.html
  + intern.html
  + manager.html
 * Add placeholder character that helps program identify were te dynamic markup begins and ends.  See Test files for names.

## Employee Summary Webpage Engine

This Node application will assist managers in generating a webpage that displays their team's basic info for quick access to emails and GitHub Profiles.

## Installation
---
Run `npm install` to install all dependencies


## Usage
---
1. Run `node apps.js` to start the application
2. Enter the number of users within your team
3. Enter the employees name > `ENTER`
4. Enter the employee's ID > `ENTER`
5. Enter the employee's email > `ENTER`
6. Select the employee's title > `ENTER`
7. If you selected Engineer, input their GitHub. If you selected Manager, input their office number. If you selected Intern, input their school
8. Repeat for all employees until you receive the "Success!" notification. 

  

9. Go to the `output` folder, find `team.html` and open it in your default web browser. this is your output web page for your team. It should look similar to below.

  



    ### Dependencies
    ---
    * [Inquirer](https://www.npmjs.com/package/inquirer) - for the CLI user interface. This will prompt user within the CLI for employee information.

## Running the Test
---
run `npm run test` in the root

recording of the app working
https://drive.google.com/file/d/1ToYO5h3JChqdPa4xpEP5Wes9n7XSAL2_/view

recording of the html report
https://drive.google.com/file/d/1W3uF1XxZ06xBtZiYUqDyVwEG-rLxOT6O/view