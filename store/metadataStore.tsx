import { create } from 'zustand'

interface BearState {
    title: string
    setTitle: (title: string) => void
    description: string
    setDescription: (description: string) => void
}

const MetadataState = create<BearState>((set) => ({
    title: 'next JS',
    setTitle: (title) => set((state) => ({ title })),
    description: '',
    setDescription: (description) => set((state) => ({ description })),
}));

export default MetadataState;