# Project 3: Spots

This is the third project of the Software Engineering program at TripleTen.

The project is a simple social photo-sharing web app called **Spots**. It allows users to view and interact with photo posts, like them, and manage their profiles. The interface displays a user profile section with an avatar, name, and description, alongside a photo feed with images and like buttons.

The structure is built using **HTML** and styled with **CSS**, as referenced in an external stylesheet. The app is designed to be responsive and user-friendly.

## Project features and technologies

- Semantic HTML5
- CSS3
- Responsive design using media queries
- Flexbox
- Grid
- Figma
- Git & GitHub
- Flat BEM file structure

### Overview

#### Structure

The HTML structure of the **Spots** app is cleanly organized using semantic HTML elements such as `<header>`, `<main>`, `<section>`, and `<footer>` to improve readability and accessibility. The entire page is wrapped in a `<div class="page">` container, which holds the header with a logo, the main content area, and the footer.

Inside the `<main>`, there are two main sections: a **profile section**, displaying the user’s avatar, name, description, and buttons for editing the profile or adding new posts, and a **cards section**, which contains an unordered list (`<ul>`) of individual photo posts (`<li class="card">`).

BEM naming structure is used for naming the classes for all blocks and their respective elements.

#### Styling and file organization

CSS is used for styling the **Spots** app. Each block has its own CSS stylesheet. All the fonts and images used in the app have been imported and included in the respective file directory. Each CSS stylesheet is linked to index.css stylesheet, in turn which is the only stylesheet linked to index.html file.

BEM is the methodology used to organize and structure all the directories and files.

**Video Description**

The video link will be available soon!

**GitHub**

[Link to the project on GitHub](https://thegrindnet.github.io/se_project_spots/)

**Images**

![Project at screensize 1440px (3 Column)](<Screensize at 1440px.png>)
![Project at screensize 1200px (2 Column)](<Screensize at 1200px.png>)
![Project at screensize 370px (1 Column)](<Screensize at 370px.png>)

#### Plan on improving the project

Although this file doesn’t show interactive functionality, the design suggests potential for further JavaScript-based interactivity (e.g., editing profiles, liking photos, adding posts).
