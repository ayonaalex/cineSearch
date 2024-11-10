import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useMovieStore = create(
  persist(
    (set) => ({
      favorites: [],
      genre:[],
      genreID:'',
      latestMovies:[],
      setGenreID: (id) => {
        set({ genreID: id });
      },
      initializeFavorites: () => {
        if (typeof window !== 'undefined') {
          const storedFavorites = localStorage.getItem('favorites')
          if (storedFavorites) {
            const parsedFavorites = JSON.parse(storedFavorites)
            if (Array.isArray(parsedFavorites) && parsedFavorites.length > 0) {
              set({ favorites: parsedFavorites })
            }
          }
        }
      },
      toggleFavorite: (movie) =>
        set((state) => {
          const isAlreadyFavorite = state.favorites.some((fav) => fav.id === movie.id);
          const newFavorites = isAlreadyFavorite
            ? state.favorites.filter((fav) => fav.id !== movie.id) 
            : [...state.favorites, movie];

          return { favorites: newFavorites };
        }),

        handleLatest: async (
          ) => {
            try {
              const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY; 
              const response = await fetch(
                `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
              );
          
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
          
              const data = await response.json();
              console.log('genre',data)
              
              set((state) => ({
                latestMovies: data.results.slice(0, 5), 
              }));
            } catch (error) {
              console.error('Error fetching movies:', error);
            }
          },          
    }),
    {
      name: 'favorites',
      storage: createJSONStorage(() => localStorage),
    }
  ),
)

