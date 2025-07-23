import type { RootState } from '@/core/store/store';

export const selectCount = (state: RootState) => state.counter.value;
