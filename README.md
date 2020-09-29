The goal is to create a Tool that lets you create detail shots from a product image.

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
4.  Install react-image-crop
    npm install react-image-crop --save
5.  In HomePage.css create the stylings for the Main image and Preview image
6.  Create a State for the image,crop and result using hooks
7.  Create functions for onloadImage, onClick and onchange
8.  Refernce for Canvas is from react-image-crop
9.  When the server is ON, the user can see the image that he wants the detailed shots
    off
10. He needs to drag a rectangle with the mouse to mark the part of the image to see the  
    detailed shots of it
11. After selection he can move it by dragging the rectangle with the mouse, and also  
    resize it.
12. If he wants to see the detailed shots then he can click on the Button.
