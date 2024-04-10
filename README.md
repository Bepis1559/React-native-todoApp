## Installation

You will need the expo-go app for your phone , if you don't build the app with EAS.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Bepis1559/React-native-todoApp.git
```

Go to the project directory

```bash
  cd React-native-todoApp
```

Install dependencies

```bash
  npm i
```

Start the server

```bash
  npx expo start
```

# React native todo application

## Features

- **Add Todos**: On the main page, users can add todos via a modal, setting its name and optionally date and time.
- **Todo Sections**: Todos are separated into four sections - overdue, later, no date, and completed.
- **Interact with Todos**: Users can interact with the todos, toggling their completed state. They will be rerendered immediately with smooth animations.
- **Notifications**: After creating a todo, a notification will be automatically attached to it, if date and time is enabled.
- **Dynamic Route**: Users can click on a todo which will reroute them to the dynamic route, where they can further set remarks, toggle completed state, change date and time, or completely remove them.
- **Local State and Database**: Upon routing back, the todo changes are saved in the local state. When the app goes in the background or it's idle, the changes will also be added to the database. Upon starting the app again, fresh data will be fetched from the database.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`EAS_PROJECT_ID` , which you get from the app.json file .
