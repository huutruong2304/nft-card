import { ICard, ISeller, ICharacterStatistics, IPaginationParams, ITier } from '@/types/types';

// Your existing seller list
export const SELLER_LIST: ISeller[] = [
  { id: 1, name: 'Truong Nguyen', avatar: '/assets/avatars/1.png' },
  { id: 2, name: 'Hieu Le', avatar: '/assets/avatars/2.png' },
  { id: 3, name: 'Nam Bac', avatar: '/assets/avatars/3.png' },
];

// Example names for cards
const CARD_NAMES = ['Luffy', 'Brook', 'Garp', 'Nami', 'Nico Robin', 'Sanji', 'Usopp', 'Zoro'];

// Example tiers for cards
export const TIER_LIST: ITier[] = [
  { value: '1', label: 'Common' },
  { value: '2', label: 'Rare' },
  { value: '3', label: 'Epic' },
  { value: '4', label: 'Legendary' },
];

// Example statistics for characters
const STATISTICS_EXAMPLES: Partial<ICharacterStatistics>[] = [
  {
    birthday: 'May 5',
    hometown: 'East Blue',
    age: '19',
    height: '174cm',
    bloodType: 'F',
    status: 'Alive',
    bounty: 1500000000,
    haki: 'Conqueror’s Haki',
    favoriteFood: 'Meat',
    additionalInfo: 'Captain of Straw Hat Pirates',
  },
  {
    birthday: 'February 3',
    hometown: 'Thriller Bark',
    age: '90',
    height: '277cm',
    bloodType: 'S',
    status: 'Alive',
    bounty: 83000000,
    haki: 'None',
    favoriteFood: 'Milk',
    additionalInfo: 'Musician of Straw Hat Pirates',
  },
  // Add more examples if needed
];

function getRandomDay(): string {
  // Get today's date
  const today = new Date();

  // Get the time in milliseconds from the epoch for today's date
  const todayTime = today.getTime();

  // Generate a random number of milliseconds between 0 and todayTime
  const randomTime = Math.floor(Math.random() * todayTime);

  // Create a new date using the random time
  const randomDate = new Date(randomTime);

  return randomDate.toISOString();
}

// Function to create a single card with systematic values
const createCard = (id: number, index: number): ICard => {
  const sellerIndex = index % SELLER_LIST.length;
  const cardNameIndex = index % CARD_NAMES.length;
  const tierIndex = index % TIER_LIST.length;
  const statisticsIndex = index % STATISTICS_EXAMPLES.length;

  return {
    id,
    name: CARD_NAMES[cardNameIndex],
    price: +(+Math.floor(Math.random() * (50 - 10 + 1)) + 10 + cardNameIndex).toFixed(2), // Vary price based on the card name index for uniqueness
    unit: 'ETH',
    tier: TIER_LIST[tierIndex],
    image: `/assets/cards/${CARD_NAMES[cardNameIndex].toLowerCase().replace(/\s+/g, '-')}.png`,
    seller: SELLER_LIST[sellerIndex],
    statistics: STATISTICS_EXAMPLES[statisticsIndex],
    createdAt: getRandomDay(),
  };
};

// Function to create multiple cards (e.g., 200)
export const generateCards = (count: number): ICard[] => {
  const cards: ICard[] = [];
  for (let i = 1; i <= count; i++) {
    cards.push(createCard(i, i - 1)); // Use (i - 1) as index to loop through lists
  }
  return cards;
};

// Generate 200 cards
export const CARD_LIST = generateCards(200);

// Function to simulate an API call with a random delay
export const fetchCardListWithPagination = (params: IPaginationParams): Promise<ICard[]> => {
  const { page, itemsPerPage, search, price, time, minPrice, maxPrice, tier } = params;
  return new Promise((resolve) => {
    const randomDelay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000; // Random delay between 1 to 5 seconds

    setTimeout(() => {
      // Calculate start and end indices for pagination
      const endIndex = page * itemsPerPage;

      // Slice the CARD_LIST to return the current page's data
      let paginatedCards = [...CARD_LIST];

      if (search) {
        const formatSearch = search.trim().toLowerCase();
        paginatedCards = paginatedCards.filter((card) => card.name.toLowerCase().includes(formatSearch));
      }

      if (tier) {
        paginatedCards = paginatedCards.filter((card) => card.tier.value === tier);
      }

      if (minPrice && maxPrice) {
        paginatedCards = paginatedCards.filter((card) => card.price >= +minPrice && card.price <= +maxPrice);
      }

      if (price) {
        if (price === '1') {
          paginatedCards = paginatedCards.sort((cardA, cardB) => cardA.price - cardB.price);
        } else {
          paginatedCards = paginatedCards.sort((cardA, cardB) => cardB.price - cardA.price);
        }
      }

      if (time) {
        if (time === '1') {
          paginatedCards = paginatedCards.sort((cardA, cardB) => new Date(cardB.createdAt).getTime() - new Date(cardA.createdAt).getTime());
        } else {
          paginatedCards = paginatedCards.sort((cardA, cardB) => new Date(cardA.createdAt).getTime() - new Date(cardB.createdAt).getTime());
        }
      }

      paginatedCards = paginatedCards.slice(0, endIndex);
      // console.table(paginatedCards);

      resolve(paginatedCards);
    }, randomDelay);
  });
};
