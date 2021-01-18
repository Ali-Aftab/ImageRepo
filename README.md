# ImageRepo

This project is an API that allow user to build a image repository. THe app lets you view images as a non user. Regular users can upload and delete their own images. This project used Node.js, Express, PostgreSQL, and Sequelize.

## Get Started

To run this application:

1.  In your terminal type `git clone https://github.com/Ali-Aftab/ImageRepo.git` to clone it to your computer.
2.  Then type `cd ImageRepo` to acces the folder
3.  To install the required modules type `npm i`
4.  Make a new PostgreSQL database by writing `createdb imagerepo`
5.  Create a .env file by typing `touch .env` to store your secret keys
6.  In the .env file type `SECRET_JWT_KEY=ENTERYOURKEYHERE`
7.  Type `npm run start-dev` in your terminal and you can use the API!

## API

First we recommend to install [Postman](https://www.postman.com/) to easily test out the API. Remember to add `localhost:8000` to the URL before typing in the api path. (``=>`localhost:8000/api/signup`)

### Sign Up/ Login Routes

Making an account is required to upload and delete your images.

- POST `/api/auth/signup` allows anyone to make an account <br/>
  &nbsp;&nbsp;*Requires an email and password key inside the body <br/>
  &nbsp;&nbsp;*Example {email: test@test.com, password: password1} <br/>
- POST `/api/auth/signin` when logged in, the response will give the user an access token. The access token must be placed in the header (with "x-access-token" as the key and the given accessToken as the value)  
  &nbsp;&nbsp;*Requires an email and password key inside the body. Also the x-access-token inside the header.<br/>
  &nbsp;&nbsp;*The x-access-token last for 24 hours. <br/>

### Image Routes

- POST `/api/picture/upload` allows a registered user to upload an image <br/>
  &nbsp;&nbsp;\*Requires an x-access-token inside the header and the image must be attached as a file. In Postman, this can be achieved by going to form-data option under body. Then change the key value from text to file. <br/>
  &nbsp;&nbsp;\*\*Can add a description to the image inside the body {description: This is a picture of something cool} <br/>
- GET `/api/picture/listAll` allows anyone to view all the images in the repository <br/>
  &nbsp;&nbsp;\*Will provide the image Id, description, and url to the image. <br/>
- GET `/api/picture/:pictureId` allows anyone to view one image, must provide an id. <br/>
  &nbsp;&nbsp;\*Replace `:pictureId` with the id in the url. <br/>
- DELETE `api/picture/pictureId` allows the user to delete the image that is owned/associated with. <br/>
  &nbsp;&nbsp;\-Requires an x-access-token in the header and replace `:pictureId` with the id in the url.
