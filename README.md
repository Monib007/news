# THE NEWS APP

A simple and responsive news application that fetches articles from an API and displays them in an engaging layout. Users can explore news by categories and toggle between light and dark themes.

## Table of Contents
- Features
- Technologies used
- Installation
  -Frontend
  -Backend
- API Endpoints
- Usage


## Features
- View articles categorized by topics such as business, entertainment, technology, etc.
- Dark mode and light mode toggle.
- Responsive design that adapts to different screen sizes.
- Dropdown menu for easy navigation through categories.
- Fetches data from a RESTful API.

## Technologies Used

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **React Router**: For routing and navigation.
- **CSS**: For styling the application.
- **Axios**: For making HTTP requests.
- **Font Awesome**: For icons.

### Backend
- **Node.js**: JavaScript runtime for server-side applications.
- **Express**: Web framework for Node.js.
- **Axios**: For fetching articles from external APIs.
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing.

  
## Installation

# Frontend
  1. Clone the repository:
     git clone https://github.com/your-username/news-app.git
     cd news-app
  2. Navigate to the frontend directory:
       cd  frontend
  3. Install dependencies:
       npm install
  4. Start the frontend application:
       npm start
  5. Open your browser and navigate to http://localhost:3000.

# Backend
  1. Navigate to the backend directory:
       cd backend
  2. Install dependencies:
  3. Create a .env file for environment variables (if required):
       PORT=5000
       MONGODB_URI=your_mongo_db_connection_string
  4. Start the backend application:
       npm start
  5. Your backend server will run at http://localhost:5000.

## API Endpoints

# Fetch All News
$ GET /all-news
- Description: Fetches a list of all news articles.
- Response: JSON object containing articles.
  
# Fetch News by Category
$ GET /news/:category
- Description: Fetches news articles based on the specified category.
- Parameters: category - The category to filter articles by.
- Response: JSON object containing filtered articles.


## Usage
- Use the navigation bar to explore different news categories.
- Click on any article to read more.
- Toggle between light and dark mode using the theme switcher.

## Conclusion

The News App is designed to provide users with a seamless and enjoyable experience while browsing through news articles. By leveraging modern web technologies, this application not only showcases a variety of news topics but also enhances user engagement with features like dark mode and responsive design.
This project demonstrates the effective use of React for frontend development and Node.js with Express for backend services, combined with CORS to handle cross-origin requests. Whether you’re looking to stay updated on current events or simply explore diverse topics, The News App is your go-to solution.
