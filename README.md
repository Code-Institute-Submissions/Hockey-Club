# Stream One Final Project
# Castlebar Hockey Club

## Overview

### The aim of this website
Displays club information and images to websites visitors. Gives visitors the aility to enquire for membership or login if they are already a member. 
 
### How does it work
This app uses JSON Web Tokens to authenticate users and keep them logged in. All the data is consumed from an API hosted on Heroku using AngularJS. The site is styled with Bootstrap.


## Features
- Navigation between main pages.
- Enquiry Form.
- User Login. (Username + password stored in local storage)
- Images Gallery Carousel.
- 5 Team Pages. 
- Likes Counter (Likes stored in local storage)

 
### Features I Would Like To Add.
- User Based Features
    - Ability to add images and details to the carousel.

## Tech Used

### Some the tech used includes:
- [AngularJS](https://angularjs.org/)
    - **AngularJS** is used to in app to handle the routing, storage. Created the Controllers, Factory and Custom Directives
- [Bootstrap](http://getbootstrap.com/)
    - **Bootstrap** is used to give a responsive, simple design approach in the application/website. Also used the framework for the Media Gallery carousel and the accordians on each of the team pages for the team photos.
- [npm](https://www.npmjs.com/)
    - We use **npm** to help manage some of the dependencies in our application.
- [bower](https://bower.io/)
    - **Bower** is used to manage the installation of our libraries and frameworks.
- [jQuery](https://jquery.com/)
    - Used **jQuery** modals for login.
- [Sweet Alerts](http://t4t5.github.io/sweetalert/)
	- **Sweet Alerts** are in use on the Enquiry Form and the Login Modal. 

## Contributing
 
### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone <project's Github URL>``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
     `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
 
  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server -c-1```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request

## Credit
- I have used images I sourced with google searches. 
- With the paragraphs for each of the teams, I copied some mission statements from random teams across the world. 
- In this README file, I copied the Contributing & How Does It Work section from the to_do application.
