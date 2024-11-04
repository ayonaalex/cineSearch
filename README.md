This project is a Next.js application that allows users to search for movies, view detailed information, and manage a list of favorite movies. It demonstrates skills in Next.js, React, API integration, state management, and frontend development best practices.

## Features

1. **Home Page**

   - Homepage component is effectively set up to fetch data on the server such as Recommendations,topMovies and latest movies.
   - Integrated a persistent navigation bar within the Layout


2. **Search Movies**

   - Header on homepage had Search functionality for movie titles
   - Display of search results with movie poster, title, release year, and rating

3. **Movie Details Page**

   - Detailed information about selected movies

4. **Favorite Movies**

   - Add/remove movies from favorites list
   - Dedicated favorites page for management
   - Client-side persistence of favorites

5. **Responsive Design**

   - Fully responsive on mobile, tablet, and desktop devices
   - Implemented using CSS modules

6. **State Management**

   - Utilizes Zustand for application state management

7. **Routing**

   - Next.js routing for navigation between pages

8. **Error Handling and Loading States**

   - User feedback during data fetching

9. **Performance Optimization**
   - Image optimization using Next.js Image component

## Installation and Setup

1. Clone the repository:
   git clone https://github.com/ayonaalex/cinesearch.git

2. Navigate to the project directory:
   cd cinesearch

3. Install dependencies using Bun:
   bun install

4.Create a `.env.local` file in the root directory and add your API key
NEXT_PUBLIC_API_KEY=your_api_key_here

if you dont have a registered apikey please login here https://www.themoviedb.org/

5. Start the development server:
   bun run dev

6. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Design Decisions and Challenges

### State Management

- Implemented Zustand for state management due to its simplicity and performance
- Created a custom store (useMovieStore) to handle:

- Favorite movies management

- Challenge: Persisting favorites across sessions

- Solution: Utilized Zustand's persist middleware with localStorage

### Component Architecture

- Created reusable components:

- MovieCard: Displays individual movie information
- Slider: Auto-playing carousel for featured movies
- FavoriteButton: Toggle for managing favorite movies

- Challenge: Managing server and client components

- Solution: Clearly separated server and client components using the 'use client' directive, used swr to fetch component depened data and used server components when the components doesn't have client interations as It can improve performance and reduce the JavaScript sent to the client.

## Additional Features

### Auto-playing Carousel

- Implemented an auto-playing carousel for latest movies
- Added hover pause functionality
- Included manual navigation controls

### Genre Filtering

- Added genre-based movie filtering
- Implemented server-side filtering for better performance
- Created a clean URL structure for filtered results
