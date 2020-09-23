The goal is to create a tool that lets you create detail shots from a product image.

Key Features:

1. The user should be able to drag a rectangle with the mouse to mark the part of the image that should be exported as a detail shot.
2. Once a selection has been made it should be possible to move it by dragging the rectangle with the mouse, and to resize it by dragging the resize handles on the corners.

Implementation:

1.  Install React in Local enviroment
    npx create-react-app cylindo
2.  Create Components in src folder for Image and HomePage
3.  Install Reactstrap and Bootstrap
    npm install --save reactstrap
    npm install --save bootstrap
4.  Install cropper.js
    npm install cropperjs
5.  In HomePage.css create the stylings for the Main image and Preview image
6.  In Render within the div call the two images
7.  Created a state for the Previewimage and render it in the Previewimage src
8.  ComponentDidMount taking the reference from
    https://www.npmjs.com/package/cropperjs for the options
9.  Once it is done called it in App.js

Result:

We can mark the image for a detail short as well as it is possibel to move the mouse and resize it.
