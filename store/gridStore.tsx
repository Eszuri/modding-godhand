import { create } from 'zustand'

interface BearState {
    count: number
    setCount: (count: number) => void
}

const GridImageState = create<BearState>((set) => ({
    count: 3,
    setCount: (count) => set((state) => ({ count })),
}));

export default GridImageState;