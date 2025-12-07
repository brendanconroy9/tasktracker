import create from 'zustand';

export const useStore = create((set) => ({
  user: { xp: 0, level: 1, coins: 0, streak: 0, lastCompletionDate: null },
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
  addTask: (task) => set((state) => ({ tasks: [task, ...state.tasks] })),
  removeTask: (id) => set((state) => ({ tasks: state.tasks.filter(t => t.id !== id) })),
  markComplete: (id) => set((state) => ({ tasks: state.tasks.map(t => t.id === id ? { ...t, completed: true } : t) })),
  updateUser: (patch) => set((state) => ({ user: { ...state.user, ...patch } })),
}));
