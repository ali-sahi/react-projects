### React Tours App

This is a simple React web application for displaying and managing a list of tours. It fetches tour data from an external API and allows users to view tour details, expand descriptions, and remove tours from the list.

### Features

1. Display a list of tours with their names, images, prices, and brief descriptions.
2. Allow users to expand or collapse tour descriptions to see more or less information.
3. Provide a "Not Interested" button to remove tours from the list.
4. Show a loading screen while fetching data from the API.
5. Handle cases where no tours are available and offer a refresh button to fetch new data.

### Technologies Used

1. React: The front-end framework used for building the application.
2. JavaScript: The primary programming language for the application.
3. HTML and CSS: Used for structuring and styling the user interface.
4. Fetch API: Used to retrieve tour data from the external API.

### Getting Started

1. Clone the Repository:
   git clone https://github.com/ali-sahi/react-projects.git

2. Install Dependencies:
   cd react-tours-app
   npm install

Run the App:
npm start

# The app should be running at http://localhost:3000 by default.

### Usage

1. Upon loading the application, it will fetch tour data from the API.
2. If tours are available, they will be displayed with their names, images, prices, and brief descriptions.
3. Users can click the "Show More" or "Show Less" button to expand or collapse tour descriptions.
4. To remove a tour from the list, click the "Not Interested" button.
5. If there are no tours left or an error occurs during data fetching, an appropriate message is displayed with the option to refresh the list.

### API Endpoint

The application fetches tour data from the following API endpoint:
https://course-api.com/react-tours-project
