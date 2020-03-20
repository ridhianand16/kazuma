[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/ridhianand16/kazuma">
    <img src="images/KAZUMA.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">KAZUMA</h3>

  <p align="center">
    A web app that helps employers find freelancers to work on projects
    <br />
    <a href="https://app.swaggerhub.com/apis/swagdhi/Kazuma/1.0.1d"><strong>Explore the OpenAPI specification »</strong></a>
    <br />
    <a href="https://github.com/ridhianand16/kazuma/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ridhianand16/kazuma">View Demo</a>
    ·
    <a href="https://github.com/ridhianand16/kazuma/issues">Report Bug</a>
    ·
    <a href="https://github.com/ridhianand16/kazuma/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Issues](#issues)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)


<!-- ABOUT THE PROJECT -->
## About The Project

<!--[![KAZUMA][product-screenshot]](https://localhost:9678) -->

This project is a web-app made with Express.js and MongoDB. It is used by employers to put up projects which they want freelancers to work on.

The OpenAPI Specification is available at: [Swagger](https://app.swaggerhub.com/apis/swagdhi/Kazuma/1.0.1)

Freelancers bid on the projects and the employer picks the most suitable freelancer from the pool of bids.

This website was essentially made as a submission for a Paypal assignment. Along the way, I ended up learning the following things.

* Understanding that the API documentation should me made first, not after the implementation of the project. This enables the programmer to have a clearer view of what is to be implemented.
* The many advantages of JWT
* Git - Understanding the usecases and the basics of Git
* The importance of documentation.

### Built With
The following frameworks or add-ons were used in building the project.

* [Node.js](https://nodejs.org/en/)
* [Bootstrap](https://getbootstrap.com)
* [PUG Templating Engine](https://pugjs.org/api/getting-started.html)
* [MongoDB](https://www.mongodb.com/)
* [SwaggerHub](https://swagger.io/tools/swaggerhub/)
* [Express.js](https://expressjs.com/)
* [JWT](https://jwt.io/)

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```

### Installation

1. Start your database with MongoDB Atlas.
2. Clone the repo
```sh
git clone https://github.com/ridhianand16/kazuma.git
```
3. Install NPM packages
```sh
npm install
```
4. Enter your database link in your environment variables. Ensure API KEY, Token Secret variable are also available in the .env file
```sh
DB_CONNECTION = '<LINK>'
TOKEN_SECRET = '<TOKEN>'
```
<!-- ABOUT OpenAPI Spec -->

## OpenAPI Specification

The specification was made using OAS 3.0. The collections used here include project, employer, user and error. The endpoints describe the CRUD calls. A few screenshots from SwaggerHub are attached here.

You can access the OpenAPI Spec [here](https://app.swaggerhub.com/apis/swagdhi/Kazuma/1.0.1).

The endpoints are as follows:


| EndPoint  | CRUD Methods  | Description |
| ------------- | ------------- | ------------- |
| /register/user  | POST, GET, PUT, DELETE | Freelancer registration |
| /register/employer | POST, GET, PUT, DELETE | Employer registration |
| '/projects/{projectID}' | POST, GET, PUT, DELETE | CRUD operations on project |
| '/user/{username}/profile' | GET | User's profile details |
| '/employer/{username}/profile' | GET | Employer's profile details |
| /me | GET | Currently logged in user's profile |
| /me/bidProject/project/{projectID} | POST | Allows a freelancer to bid on projects |
| /projects | GET | Display all projects on webapp |
| '/projects/{status}' | GET | Display all projects of a particular status (ongoing, inactive, accepted) |
| '/employer/{username}/projects/{status}' | GET | Display projects of a particular status (ongoing, inactive, accepted) proposed by an employer |
| /auth/user | GET, POST | Freelancer login |
| /auth/employer | GET, POST | Employer login |



<!-- USAGE EXAMPLES -->
## Usage

The webapp can be used by 

1. Freelancers looking for jobs
2. Employers looking for interested freelancers
3. Students who are interested in freelancing
4. Employees of different organizations looking to make money


<!-- ISSUES -->
## Issues

See the [open issues](https://github.com/ridhianand16/kazuma/issues) for a list of proposed features (and known issues).

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Your Name - [@Ridhi Anand](https://www.linkedin.com/in/ridhianande) - ridhianand16@gmail.com

Project Link: [https://github.com/ridhianand16/kazuma](https://github.com/ridhianand16/kazuma)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [README Template](https://github.com/othneildrew/Best-README-Templatet)
* [Canva](https://canva.com)
* [SwaggerHub] (https://www.swaggerhub.com/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/ridhianand16/kazuma.svg?style=flat-square
[license-url]: https://github.com/ridhianand16/kazuma/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/ridhianand/
[product-screenshot]: images/KAZUMA.png
[swagger-link]: https://app.swaggerhub.com/apis/swagdhi/Kazuma/1.0.1
