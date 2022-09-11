import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ToggleState {
  menu: boolean;
  triggerMenu: () => void;
}

export const useToggleStore = create<ToggleState>()(
  devtools((set) => ({
    menu: false,
    triggerMenu: () => set((state) => ({ menu: !state.menu })),
  }))
);

interface ThemeState {
  isDark: boolean;
  toggleTheme: () => void;
}

export const useThemeToggle = create<ThemeState>()(
  devtools(
    persist(
      (set) => ({
        isDark: false,
        toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
      }),
      {
        name: "theme-cache",
      }
    )
  )
);
