# Countries in the World App

This is a full-stack single-page application (SPA) built with React on the frontend and Node.js on the backend. The application allows users to search for countries based on currency codes, view detailed information about each country, mark countries as favorites, and view search history.

### Features

- **User Authentication:** Login and registration functionality using JWT tokens for secure authentication and session management.
  
- **Country Details Display:** Dynamically render details of countries such as name, currency, capital, languages, and flag based on the user's currency code search.
  
- **Debounced Search:** Efficiently query countries by currency code, reducing unnecessary API calls.

- **Favorites Feature:** Mark countries as favorites and view them on a dedicated "Favorites" page.
  
- **Search History Tracking:** Record the last five unique searches per user and display them in a "History" section on the Homepage.

### Technologies Used

#### Backend

- **Node.js**
- **Express.js**
- **MongoDB**: For storing user data, favorites, and search history.
- **JWT**: JSON Web Tokens for user authentication.

#### Frontend

- **React**
- **Context API**: For managing global state like user authentication and favorites.
- **React Router**: For routing within the SPA.
- **Axios**: For making HTTP requests to the backend API.

### Deployed Link

- [CountryApp](https://countryapp.com)

### Setup Instructions

#### Clone the repository

```bash
git clone https://github.com/your-repository-url/countries-app.git
cd countries-app
