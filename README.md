# hunt-1

# Group Members

Krishna Sumanth Koyyalamudi

Prasad Golla Durga

Pruthvi Nashkanti

Vishal Reddy Vennavaram

Saikrishna Emmadishetty

## Routes to verify db access
 * List of users in db : https://hunt-1.herokuapp.com/user/index
 * Add a new user : https://hunt-1.herokuapp.com/user/create
 * List of teams in db : https://hunt-1.herokuapp.com/team/index
 * Create a new team : https://hunt-1.herokuapp.com/team/create

## Instructions for cloning repository:
  * Steps for cloning repository using command line
    * On GitHub, navigate to the main page of the repository
    * Click "Code" on main page repository which is above the list of files.
    * Here we can clone using HTTPS and SSH.Click the respective tabs and copy the URL provided.
    * Now open Git Bash.(necessary tools should be installed)
    * Change the current working directory to the location where we want the cloned directory.
    * Type "git clone", and then paste the URL copied earlier.
    * Press "Enter" to create your local clone.
 
###  Note:
We can also clone the repository using github desktop.

## Instructions to start the The-Hunt project
    * Steps for starting the cloned repository using the Powershell.
    * Open PS as admin using the Powershell in the-Hunt Folder.
    * Use "npm install" to install modules.
    * Use "npm run dev" to start a local version.
    * Open a browser to the URL provided in the powershell

Link: https://desktop.github.com/

## Heroku Link:
   Here is hosted link of our application on heroku.
   
  https://hunt-1.herokuapp.com/

# The-Hunt
“The Hunt game” is an outdoor collaborative game which allows the authorized users to play with other team members or to compete with other players in finding the hidden locations in a quest. We are designing this game in view that this is compatible with iPhone SE, Laptop, Tablet, and Android phones. 

A first time user has to register in order to become a player in the game with the Open Authorization. After the user creates an account he can login into the account. The player will have options either to join a team or to create a team. In order to join a team an invitation will be sent to the users via mail. The invitation will be automatic rejection if the user does not respond to it within three days.
A user can create a quest containing number of locations that can be identified by means of latitudes and longitudes. A team containing players will compete to find the locations within specified time period. The team which identifies maximum number of locations within quest gains maximum number of points and will be the winner.

## Technology Stack

Considering requirements provided in RFP, we have put our effort in selecting proper technologies so that it check all our boxes mentioned by client. 

### Backend Language

Coming to backend language, we have decided to use Node.js, express framework as it is light-weight and efficient when it comes to real-time applications that should run across distributed devices like:

    •	an iPhone SE
    •	an Android device
    •	a laptop computer
    •	an iPad 

And Node.js offers an Easy Scalability and it is has been regarded as a full-stack JavaScript for serving both the client and the server-side applications.

The ability of Node. js to simultaneously handle multiple requests and provide prompt responses makes it an ideal solution for client-focused web app development. This runtime environment is found more frequently on single-page applications than any other backend technology
    
### Frontend Language

Coming to Front-End, we have thought of using ejs layouts We have accessed factors like:

    •	Expertise on Technology.
    •	Available time to deliver.
    •	Security.
    •	Availability Of resources.

Apart from that, JavaScript seemed to be fast, responsive and thought it will be suitable for all platforms such as Android and IOS. Secondly, we are using Heroku application to deploy our application as this is open source and feasible to host. 

BY using  the above technologies there will be a Speedy Development and User-driven Outcomes and  using the Using certain modern frameworks will enable faster development of elements 

And it is very secure and it has a Quickly Reacting Features and Apps

### Framework

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

### API's 

For accessing the location we have various API’s like Google Maps and Mapbox. Here in this application we thought of using Google Maps. And for authentication and authorization purpose we are thought of using Open authorization.

## Testing:
  
 Here for testing we are using Cypress. Cypress is purely javascript based front end testing tool.
 
 Using Cypress, developers can create:
 
 Unit tests Integration tests End to End tests
 
 ## ER DIAGRAM 
 
 ![](https://github.com/Krishna-Koyyalamudi/hunt-1/blob/master/finalERDNodate.jpeg)
