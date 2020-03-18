[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/ridhianand16/paypal-final">
    <img src="images/KAZUMA.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">KAZUMA</h3>

  <p align="center">
    A web app that helps employers find freelancers to work on projects
    <br />
    <a href="https://github.com/ridhianand16/paypal-final/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ridhianand16/paypal-final">View Demo</a>
    ·
    <a href="https://github.com/ridhianand16/paypal-final/issues">Report Bug</a>
    ·
    <a href="https://github.com/ridhianand16/paypal-final/issues">Request Feature</a>
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

Freelancers bid on the projects and the employer picks the most suitable freelancer from the pool of bids.

This website was essentially as a submission for a Paypal assignment. Along the way, I ended up learning the following things.

* Understanding that the API documentation should me made first, not after the implementation of the project. This enables the programmer to have a clearer view of what is to be implemented.
* The many advantages of JWT
* Git - Understanding the usecases and the basics of Git
* The importance of documentation. As I learned Javascript and other frameworks, I relied mostly on the documentation. 

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
git clone https://github.com/ridhianand16/paypal-final.git
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


<!-- USAGE EXAMPLES -->
## Usage

The webapp can be used by 

1. Freelancers looking for jobs
2. Employers looking for interested freelancers
3. Students who are interested in freelancing
4. Employees of different organizations looking to make money


<!-- ISSUES -->
## Issues

See the [open issues](https://github.com/ridhianand16/paypal-final/issues) for a list of proposed features (and known issues).

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Your Name - [@Ridhi Anand](https://www.linkedin.com/in/ridhianande) - ridhianand16@gmail.com

Project Link: [https://github.com/ridhianand16/paypal-final](https://github.com/ridhianand16/paypal-final)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [README Template](https://github.com/othneildrew/Best-README-Templatet)
* [Canva](https://canva.com)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/ridhianand16/paypal-final.svg?style=flat-square
[license-url]: https://github.com/ridhianand16/paypal-final/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/ridhianand
[product-screenshot]: images/KAZUMA.png