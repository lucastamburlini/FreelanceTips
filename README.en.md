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

## Deployment

The application is deployed on Vercel and can be accessed at https://freelance-tips.vercel.app/.

## Key Features

- Root page that describes the web platform.
- Navbar present on all routes with links to at least 3 different routes.
- Coherent stylistic design throughout the application.
- Use of React (bootstrapped with Vite) as the sole technology.
- Use of images and external resources (with local assets as a last resort).
- No use of `<a>` HTML elements for routing to provide a SPA (Single Page Application) experience to the user.

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

To run the tests with Playwright, use the following command:

```bash
npx playwright test
```

This command will run the automated tests and open a browser to display the process. You can also view the test results in the console.

```bash
npx playwright show-report
```

This will open a browser with a detailed report of the tests, where you can see information about the test cases, results, and any errors encountered.
