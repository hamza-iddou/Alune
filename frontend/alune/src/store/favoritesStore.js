import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useFavoritesStore = create(
  persist(
    (set, get) => ({
      favoriteIds: [],
      
      toggleFavorite: (id) => {
        const { favoriteIds } = get();
        if (favoriteIds.includes(id)) {
          set({ favoriteIds: favoriteIds.filter((favId) => favId !== id) });
        } else {
          set({ favoriteIds: [...favoriteIds, id] });
        }
      },
      
      isFavorite: (id) => {
        return get().favoriteIds.includes(id);
      },
      
      clearFavorites: () => set({ favoriteIds: [] }),
    }),
    {
      name: 'alune_favorites', // localStorage key
    }
  )
);
