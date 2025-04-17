import { WoItemType } from '@/types';

const generateRandomItems = (count = 5) => {
  const types: WoItemType[] = ['no', 'doing', 'finish'];

  return Array.from({ length: count }, (_, index) => ({
    id: index.toString(),
    type: types[Math.floor(Math.random() * types.length)],
  }));
};

export { generateRandomItems };
