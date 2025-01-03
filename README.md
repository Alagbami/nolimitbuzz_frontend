# User Management Application  

A simple React application built with Vite, showcasing user management functionality. This app fetches user data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com) and displays it in a clean and responsive user interface.  

## Features  

### Home Page  
- Displays a list of users in a table format.  
- Each row contains user details (name and email) and a "View Details" button that navigates to a detailed user view page.  
- Responsive design ensures compatibility across various screen sizes.  

### User Details Page  
- Shows detailed information about a specific user, including:  
  - Name  
  - Email  
  - Phone  
  - Website (with a clickable link)  
  - Address (street and city)  
- Provides a "Back to Home" link for easy navigation back to the homepage.  

## Technology Stack  
- **React**: For building the user interface.  
- **Vite**: For a fast and optimized development environment.  
- **TypeScript**: For type-safe JavaScript.  
- **Axios**: For making HTTP requests to fetch user data.  
- **React Router**: For seamless navigation between pages.  
- **Tailwind CSS**: For styling and responsive design.  

## Project Structure  

```plaintext  
src/  
│  
├── pages/  
│   └── Home.tsx       # Home page   
│   └── UserDetailsPage.tsx  # User details id page
│--- components/  
│   └── LoadingSpinner.tsx  # Loading spinner component
|
├── types.ts           # Type definitions 
├── App.tsx            # Main application file  
├── main.tsx           # Application entry point  
└── index.css          # Global styles  
