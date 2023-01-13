import Fetch from '../utils/fetcher';

const HomeRoutes = {
  stats: () => Fetch<{ users: number, stat2: number, stat3: number }>('/api/home/stats'),
};

export default HomeRoutes;
