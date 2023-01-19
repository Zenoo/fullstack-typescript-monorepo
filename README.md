## Backend

> Made with [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/), [Prisma](https://www.prisma.io/), written in [Typescript](https://www.typescriptlang.org/).

## Frontend

> Made with [MUI's](https://mui.com/) components, [React](https://reactjs.org/) and [create-react-app](https://facebook.github.io/create-react-app/).

## How to use

- Create a new project from this template

![](https://i.imgur.com/Hc0JsXs.png)

- Copy `.env.sample` to `.env` and adapt the variables

- Install dependencies: `npm i` (This should also setup your database from the `schema.prisma` file and the migrations)

- Start both the server and the client with `npm run dev`

### How to sync your database with your new Prisma schema

- Run `npm run db:sync:dev`

### How to seed your database

- Edit `server/prisma/seed.ts`

- Run `npm run db:seed`

## Deployment

*This project should deploy successfully as-is on Heroku*

- Set the environment variables

- Install dependencies: `npm ci` (This should also setup your database from the `schema.prisma` file and the migrations)

- Start the server with `npm run start`

## Contributing

- Fork the project

- Make sure your NodeJS and npm versions are up to date

- Copy `.env.sample` to `.env` and adapt the database URL

- Install dependencies: `npm i` (This should also setup your database from the `schema.prisma` file and the migrations)

- Start both the server and the client with `npm run dev`

- Commit and push your changes

- Create a pull request

## Documentation

Every

- Component
- Method
- Callback

Should have a corresponding documentation.


## File Structure

```
├── client
│	├── build    			# Compiled frontend
│	├── public
│	│	├── i18n			# Folder containing all the translations
│	│	└── ...      		# Any other static file
│	└── src
│		├── components 		# Reusable components
│		├── hooks     		# React hooks
│		├── layouts    		# Layouts
│		├── theme     		# Theme variables
│		├── utils       	# Utility functions
│		└── views       	# Views
├── core 					# Shared ressourcs for both front and back end
│   ├── src              
├── prisma 					# Prisma types definitions for both front and back end
│   ├── src              
└── server 					# Back end
    ├── prisma              # DB
	└── src
	    ├── controllers     # Controllers
 	  	├── utils       	# Utility functions
	    └── ...
```