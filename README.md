# Groupware Gossip - Model-View-Controller (MVC) Challenge

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[Click here to go to the Groupware Gossip deployed site.]()

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [User Story/Acceptance Criteria](#user-story-and-acceptance-criteria)
7. [Questions](#questions)

## Description

Groupware Gossip is a CMS style blog site similar to a Wordpress site, where developers can publish blog posts and comment on other developers' posts as well. Having built this site entirely from scratch and deployed it to Heroku, it is now freely accessible. The site follows MVC paradign in its architectural structure, using Handlebards.js as the templating lenguage, Sequelize as the ORM, and express-session for authentication. 

Sharing and consolidating software principles and concepts in a central, shared location is valuable for the whole community, and this site provides a medium for accomplishing that goal.

### Mock Up

The screenshot below shows the deployed MVC which shows it's various levels of functionality.
[![An example of the deployed tool with a sample output already displayed.](./assets/mockup-demo.gif)](./assets/mockup-demo.gif)

## Installation

This project does not need installation as it has a front end deployment through Heroku, although an account must be created in order to access the blog's various functions. [Click here to go to the Groupware Gossip deployed site.]() To create a copy of the application, a separate .env file must be created, and the various npm dependencies must be installed as defined in [package.json](./package.json).


## Usage

Sharing and consolidating software principles and concepts in a central, shared location is valuable for the whole community, and this site provides a medium for accomplishing that goal. To use it, first, you must create an account and sign in. Once signed in, the user is able to view others' blog posts, create posts, or comment on others' posts. 

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the MIT license.

## Contributing

To contribute to this repository, simply create a pull request, create issues, or reach out to me (see [Questions](#questions) below). I do my best to ensure that pull requests are up to date. 

## User Story and Acceptance Criteria

### User Story
```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

### Acceptance Criteria
```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Questions

If you have any questions, reach out to me through either of the methods below:
- [GitHub - J03B](https://github.com/J03B/)
- [email - (byucrazyfan@gmail.com)](mailto:byucrazyfan@gmail.com)
