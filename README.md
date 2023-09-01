
# WeShare: File Sharing Platform

WeShare is a robust and dynamic file sharing application developed using Node.js, Express.js, and MongoDB. The platform allows users to upload and share files seamlessly while ensuring secure delivery through email notifications.



## Deployment

Deployed Link - 


## Features

- **File Upload API** : Facilitates uploading files securely.
- **Multer Package Integration** : For efficient file handling and storage.
- **File Download** : Enables users to retrieve shared files from the server.
- **Email Notifications** : Utilizes nodemailer for sending email alerts for file sharing activities.
- **Cron Jobs** : Schedules tasks to remove files that are 24 hours old, ensuring optimized storage management.


## Non Functional Requirements

- We anticipate more file searches than uploads.
- The system needs to be reliable in terms of file storage and sharing.
- We project a user base of 1,00,000 total users.
- We may encounter up to 1,00,000 file shares in a quarter.
- On an average day, we can expect around 100 file shares.
- The system should ensure that file expiration durations or other related settings are not altered while a file is being uploaded or downloaded.
- For scalability, the system should be prepared to handle at least 3x the expected traffic.
## Installation

```bash
  npm install
  npm start
```

- Add the necessary env variables in the `.env` file 

Go to `http://localhost:3000/` to view the website
## Tech Stack

WeShare leverages a number of renowned open-source technologies:

- **Node.js**: Asynchronous event-driven JavaScript runtime.
- **Express**: Minimalist web framework for Node.js.
- **MongoDB**: A document-oriented NoSQL database.
- **Multer**: Middleware for handling multipart/form-data.
- **Nodemailer**: Module for sending emails from Node.js applications.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in the backend folder

`PORT` - Port on which the server will run. (default is 3000 for your setup)

`MONGO_CONNECTION_URL` - MongoDB connection string URL.

`APP_BASE_URL` - The base URL of your application (for your setup, it's http://localhost:3000).

`GMAIL_PASS` - Password for the Gmail account used for sending emails.

`GMAIL_EMAIL` - Email address of the Gmail account used for sending emails.

(Note: Please ensure you don't commit your .env file with sensitive information to version control. Keep your credentials confidential.)

## API Reference

API DOCS - 

### Authentication APIs

#### Upload File

```http
  POST /api/files
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `myfile` | `file` | **Required**. File to be uploaded by the user|


#### Send Email for the shared file

```http
  POST /api/files/send
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `uuid` | `string` | **Required**. UUID for the uploaded file |
| `emailTo` | `string` | **Required**. Receiver Email Address |
| `emailFrom` | `string` | **Required**. Sender Email Address |


#### Get File - Download

```http
  GET /files/uuid
```
Fetch the file to download based on the uuid



## Authors
Madhur Saxena