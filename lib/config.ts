export const HARDCODED_USERS = {
    organization: {
      id: '1',
      email: 'admin@techcorp.com',
      password: 'admin123',
      name: 'TechCorp Inc.',
      type: 'organization'
    },
    employee: {
      id: '1',
      email: 'john@techcorp.com',
      password: 'employee123',
      name: 'John Doe',
      type: 'employee',
      walletAddress: 'put the wallet address'
    }
  };
  
  export const CHAIN_CONFIG = {
  id: 5201420,
  name: 'Electroneum Testnet',
  network: 'electroneum-testnet',
  nativeCurrency: {
    name: 'ETN',
    symbol: 'ETN',
    decimals: 18,
  },
  rpcUrls: {
    public: { http: ['https://rpc.ankr.com/electroneum_testnet'] },
    default: { http: ['https://rpc.ankr.com/electroneum_testnet'] },
  },
  blockExplorers: {
    default: { name: 'Electroneum Explorer', url: 'https://blockexplorer.thesecurityteam.rocks/' },
  },
} as const;