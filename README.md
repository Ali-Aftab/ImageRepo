# ImageRepo

This project is an API that allows users to build an image repository. The app lets you view images as a non-user. Regular users can upload and delete their images. This project used Node.js, Express, PostgreSQL, and Sequelize.

## Get Started

To run this application:

1.  In your terminal type `git clone https://github.com/Ali-Aftab/ImageRepo.git` to clone it to your computer.
2.  Then type `cd ImageRepo` to access the folder
3.  To install the required modules type `npm i`
4.  Make a new PostgreSQL database by writing `createdb imagerepo`
5.  Create a .env file by typing `touch .env` to store your secret keys
6.  In the .env file type `SECRET_JWT_KEY=ENTERYOURKEYHERE`
7.  Type `npm run start-dev` in your terminal and you can use the API!

## API

First, we recommend installing [Postman](https://www.postman.com/) to easily test out the API. Remember to add `localhost:8000` to the URL before typing in the API path. (`/api/auth/signup`=>`localhost:8000/api/signup`)

### Sign Up/ Login Routes

Making an account is required to upload and delete your images.

- POST `/api/auth/signup` allows anyone to make an account <br/>
  &nbsp;&nbsp;-Requires an email and password key inside the body <br/>
  &nbsp;&nbsp;-Example {email: test@test.com, password: password1} <br/>
- POST `/api/auth/signin` when logged in, the response will give the user an access token. The access token must be placed in the header (with "x-access-token" as the key and the given accessToken as the value)  
  &nbsp;&nbsp;-Requires an email and password key inside the body. Also the x-access-token inside the header.<br/>
  &nbsp;&nbsp;-The x-access-token lasts for 24 hours. <br/>

### Image Routes

- POST `/api/image/upload` allows a registered user to upload an image <br/>
  &nbsp;&nbsp;-Requires an x-access-token inside the header and the image must be attached as a file. In Postman, this can be achieved by going to the form-data option under the body section. Then change the key value from text to file. <br/>
  &nbsp;&nbsp;-Can add a description to the image inside the body {description: This is image is cool} <br/>
- GET `/api/image/listAll` allows anyone to view all the images data and information in the repository <br/>
  &nbsp;&nbsp;-Will provide the image Id, description, and URL to the image. <br/>
- GET `/api/image/:imageId` allows anyone to view one image's data and information, must provide an id. <br/>
  &nbsp;&nbsp;-Replace `:imageId` with the id in the URL. <br/>
- GET `/api/image/direct/:imageId` allows anyone to view one image, must provide an id. <br/>
  &nbsp;&nbsp;-Replace `:imageId` with the id in the URL. <br/>
- DELETE `api/image/imageId` allows the user to delete the image that is owned/associated with. <br/>
  &nbsp;&nbsp;-Requires an x-access-token in the header and replace `:imageId` with the id in the URL.
