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

CSS Grid is used to format the layout of the cards. The property and value: `grid-template-columns: repeat(auto-fit, 413px);` is a perfect solution to make the grid responsive and to avoid making additional media queries. This values allows the grid to be responsive all the way from a 3 column layout to a 1 column layout, looking from a desktop from a resolution of 1440px all the way down to a screen width of 628px. Although the 1 column looks good, a media query is necessary to change the size of the card so it doesnt cut off.

The property and value used at a max-width of 627px is: `grid-template-columns: repeat(auto-fit, 288px);`. This is to ensure that the cards look great at a 1 column format for screens as small as 320px wide.

The Flat BEM methodology is used to organize and structure all the directories and files.

**Video Description**

- [Link to Video ] (https://docs.google.com/videos/d/17_MKI_7cPPxmvsQ_ISLA5LDckUaUV5ZMbmAzotlh8h4/edit?usp=sharing)

**GitHub**

- [Link to the project on GitHub](https://thegrindnet.github.io/se_project_spots/)

**Images**

- ![Project at screensize 1440px (3 Column)](<./images/Screensize at 1440px.png>)
- ![Project at screensize 1200px (2 Column)](<./images/Screensize at 1200px.png>)
- ![Project at screensize 370px (1 Column)](<./images/Screensize at 370px.png>)

#### Plan on improving the project

Although this file doesn’t show interactive functionality, the design suggests potential for further JavaScript-based interactivity (e.g., editing profiles, liking photos, adding posts).
