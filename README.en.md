# Freelance Tips

- [Project Description](#project-description)
- [Deployment](#deployment)
- [Key Features](#key-features)
- [Assigned and Completed Tasks](#assigned-and-completed-tasks)
- [Technological Constraints](#technological-constraints)
- [Work Constraints](#work-constraints)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Playwright Testing](#playwright-testing)

## Project Description

Freelance Tips is a web application that represents a community dedicated to sharing information about freelancing with the rest of the world. The platform allows users to discover and share practical tips, tricks, and strategies for succeeding as a freelancer in today's competitive job market.

<font color="green">

## Despliegue

The application is deployed on Vercel and can be accessed at [https://freelance-tips.vercel.app/](https://freelance-tips.vercel.app/).

</font>

## Key Features

- The homepage (Root) describes the web platform.
- A Navbar is included on all routes with links to at least 3 or more different routes.
- The stylistic design is consistent throughout the application.
- React is used as the sole technology (bootstrapped with Vite).
- Images and external resources are used, with local assets as a last resort.
- HTML `<a>` elements are not used for routing, providing a SPA experience to the user.
- Infinite scroll is implemented for posts and a "UP!" button to scroll back to the top of the page.
- Tests are conducted with Playwright to verify the frontend's correct operation.
- A contact form is integrated, allowing users to send emails to communicate with the administrator.
- Detailed documentation is available in Spanish and English to facilitate the use and understanding of the project.
- The design is responsive on all pages to ensure an optimal experience on different devices.
- A fictitious database is used for users and posts for demonstration and development purposes.
- Login and logout functionality is implemented to manage user sessions securely with Firebase, including data persistence to keep the session active.
- The project is deployed on Vercel for public access and viewing.
- Reusable primary and secondary buttons are used.
- A global context is implemented to manage user and post information throughout the application.
- Functionality to create and upload publications locally.

## Assigned and Completed Tasks

- [x] Create a web application that represents a community dedicated to sharing information with the rest of the world (can be on any topic chosen by the student).
- [x] Must have a Root page that talks about the web platform.
- [x] Must have a Navbar that is present on all routes of the application and that redirects to at least 3 different routes (including Root).
- [x] Try to bring images and resources from the internet (hardcode it in the code and local assets as a last option).
- [x] Try to provide a coherent stylistic design to the application.
- [x] Do not use `<a>` HTML elements for routing since they do not provide a SPA experience to the user.

## Technological Constraints

- [x] Must use React (bootstrapped with Vite).
- [x] Do not create an external server for the application.

## Work Constraints

- [x] Must be done individually.

## Installation

To install the project dependencies, run:

```bash
npm install
```

## Usage

To run the application in a local environment, use the following command:

```bash
npm run dev
```

This will start the development server, and you can access the application at http://localhost:5173 or your preferred port.

## Environment Variables

The project uses the following environment variables for EmailJS configuration:

- `EMAILJS_USERID`: Your EmailJS user ID.
- `EMAILJS_SERVICEID`: Your EmailJS service ID.
- `EMAILJS_TEMPLATEID`: The ID of the EmailJS template you want to use.

Make sure to create a `.env.local` file in the root of the project and add these environment variables.

# Playwright Tests

This project uses Playwright for automated testing, which are divided by views. To run the tests with Playwright, follow these steps:

First, make sure you have all the necessary dependencies installed. You can install them using npm:

```bash
npm install
```

Run the application in a local environment using the following command:

```bash
npm run dev
```

**Important!**
Log in to the application with your Google account.

Run the tests with Playwright, using the following command:

```bash
npx playwright test
```

This command will run the automated tests and open a browser to show the process. You can also view the test results in the console.

```bash
npx playwright show-report
```

This will open a browser with the detailed report of the tests, where you can see information about the test cases, results and errors found.
