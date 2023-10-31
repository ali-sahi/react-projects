### Getting Started

1- Clone the Repository:
git clone https://github.com/ali-sahi/react-projects.git

2- Install Dependencies:
cd your-repo
npm install

Run the App:
npm start

# The app should be running at http://localhost:3000 by default.

### Usage

1. View Upcoming Birthdays: When you open the app, it will display a list of upcoming birthdays, along with the total count at the top.

2. Clear All Birthdays: Click the "Clear All" button to remove all the displayed birthdays.

## Components

# App Component

The App component is the main component of the app. It is responsible for managing the application state and rendering the UI. Here's a brief overview of the App component:

1. State: The App component uses the useState hook to manage a people state variable, which holds the array of people and their birthdate data from data.js.

2. Rendering: It displays the total number of birthdays using the people.length property and renders the List component to display the list of upcoming birthdays.

3. Clear Button: It provides a "Clear All" button that, when clicked, sets the people array to an empty array, effectively clearing all birthdays.

# List Component

The List component is responsible for rendering the list of upcoming birthdays. It receives the people prop from the App component and maps through the array to create a list of individual items. Each item displays the person's name and birthdate.
