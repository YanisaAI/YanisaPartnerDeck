
import { create } from 'zustand';

interface SidebarStore {
  state: 'expanded' | 'collapsed';
  toggle: () => void;
}

export const useSidebar = create<SidebarStore>((set) => ({
  state: 'expanded',
  toggle: () => set((state) => ({ 
    state: state.state === 'expanded' ? 'collapsed' : 'expanded' 
  })),
}));
