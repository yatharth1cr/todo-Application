# todo-Application
Todo App Features
Core Functionality
Add Todo: Users can add new todos by entering text in the input field and either clicking the submit button or pressing the "Enter" key.

Display Todos: Todos are displayed as a list in the root element. Each todo includes a checkbox, a text input for editing, and a delete button.

Checkbox for Completion: Users can mark a todo as complete or incomplete by checking or unchecking the associated checkbox.

Persistent Storage: Todos are stored in the browser's localStorage, allowing users to access their todos even after closing and reopening the app.

User Interface
Dynamic Styling: Todos are visually represented with dynamic styling. Completed todos have a line-through decoration, and the text color changes accordingly.

Flexbox Layout: The todo items are displayed in a flexbox layout, providing a clean and organized appearance.

Todo Filtering
Filter by Status Buttons: Users can filter todos based on their completion status using "All," "Active," and "Complete" buttons. Each button changes the background color to indicate the active filter.

Show All Todos: Clicking the "All" button displays all todos, regardless of completion status.

Show Active Todos: Clicking the "Active" button displays only the todos that are not marked as complete.

Show Completed Todos: Clicking the "Complete" button displays only the completed todos.

Todo Modification
Edit Todo Text: Users can edit the text of a todo by typing directly into the text input associated with each todo.

Delete Todo: Users can delete a todo by clicking the trash icon next to the respective todo.

Responsiveness
Real-time Updates: Changes to todos, such as completion status, text edits, or deletions, are reflected in real-time on the UI.
Styling
Color-Coded Buttons: Filter buttons are color-coded for better visual distinction.

Visual Indication for Completed Todos: Completed todos are visually distinguished with a different text color.

Code Organization
Modular Code: The code is organized into functions, enhancing readability and maintainability.

Event Handling: User interactions are handled through event listeners, ensuring a responsive user interface.
