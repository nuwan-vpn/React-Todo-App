# React-Todo-App

This is a simple todo application built using JavaScript. It allows users to create projects and organize their tasks within those projects. Each todo item has properties such as title, description, due date, and priority. Users can view all projects and todos, edit todo details, mark todos as complete, delete todos, and create new projects.

## Features

- Create, edit, and delete projects.
- Add, edit, and delete todos within projects.
- Set due dates and priorities for todos.
- Mark todos as complete.
- Persist data using the Web Storage API (localStorage).
- Separate application logic from DOM-related functionality using modules.
- Use date-fns library for date and time manipulation.

## Usage

1. Clone the repository: `git clone https://github.com/nuwan-vpn/React-Todo-App.git`
2. Navigate to the project directory: `cd todo-app`
3. Install dependencies: `npm install`
4. Build the project: `npm run build`
5. Open `index.html` in your web browser.

## Dependencies

- date-fns: A library for date and time manipulation.
- webpack: A module bundler for JavaScript applications.

## Implementation Details

- Todos are represented as objects with properties such as title, description, dueDate, priority, and notes.
- Projects are separate lists of todos. When a user first opens the app, there is a default project to which all todos are added.
- Application logic is separated from DOM-related functionality using modules.
- localStorage is used to persist data. Data is saved to localStorage every time a new project or todo is created, and retrieved from localStorage when the app is loaded.


## Future Improvements

- Add support for subtasks or checklists within todo items.
- Implement user authentication and cloud-based data storage for multi-device access.
- Improve UI/UX design for better user experience.
- Implement drag and drop functionality for organizing todos within projects.

## License

Copyright &copy; 2024 vpn6666Solutions.com. All Rights Reserved. <br>
This project is licensed under the [MIT License](License.txt) - see the [MIT License](License.txt) file for details.


