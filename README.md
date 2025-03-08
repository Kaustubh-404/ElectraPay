# ElectraPay - Blockchain-based Recurring Payment System

## Demo Video
[![ElectraPay Demo](https://img.youtube.com/vi/mhJvtpuE5VI/0.jpg)](https://www.youtube.com/watch?v=mhJvtpuE5VI)
[Watch Demo Video](https://www.youtube.com/watch?v=mhJvtpuE5VI)

A decentralized application for managing recurring payments on Electroneumblockchain, automating salary distributions and payment tracking.

## Team
👨‍💻 **Kaustubh Pardeshi**
- Role: Frontend/Blockchain Developer
- GitHub: [Kaustubh-404](https://github.com/Kaustubh-404)

👨‍💻 **Atharva Waghachoure**
- Role: Backend/Blockchain Developer
- GitHub: [AtharvaWaghchoure](https://github.com/AtharvaWaghchoure)

## Features

### Organization Portal
- Setup recurring payments
- Track active/past payments
- Process payments
- Modify payment schedules

### Employee Portal
- View upcoming payments
- Track payment history
- Real-time status updates

## Tech Stack
- Next.js 15
- TypeScript
- TailwindCSS
- RainbowKit v2
- Wagmi v2
- Viem
- Ethers.js v5

## Quick Setup

### Prerequisites
- Node.js 18+
- NPM 9+
- Electroneumcompatible wallet
- GAS tokens

### Installation

1. Clone repository:
```bash
git clone https://github.com/yourusername/ElectraPay.git
cd ElectraPay
```

2. Setup environment:
```bash
cp .env.example .env.local
```

3. Configure `.env.local`:
```env
# Required: WalletConnect Project ID
NEXT_PUBLIC_PROJECT_ID="your_wallet_connect_project_id"

# Choose network:
# Mainnet
NEXT_PUBLIC_CONTRACT_ADDRESS="0x33837cCc3fE3774e3b36513c81424E4944D08e57"
# or Testnet
NEXT_PUBLIC_CONTRACT_ADDRESS="0x3b415D08F725C9FFB40861e342dd3eD82a3555F1"
```

4. Install and run:
```bash
npm install
npm run dev
```

## Network Details

### ElectroneumMainnet
- Chain ID: 47763
- RPC: https://mainnet.rpc.banelabs.org
- Contract: 0x33837cCc3fE3774e3b36513c81424E4944D08e57

### ElectroneumTestnet
- Chain ID: 12227332
- RPC: https://testnet.rpc.banelabs.org
- Contract: 0x3b415D08F725C9FFB40861e342dd3eD82a3555F1

## Demo Accounts

### Organization
```
Email: admin@techcorp.com
Password: admin123
```

### Employee
```
Email: john@techcorp.com
Password: employee123
```

## Smart Contract Functions

### Core
- `setupRecurringPayment(address recipient, uint96 amount, uint64 interval)`
- `processRecurringPayment(uint256 paymentId)`
- `cancelRecurringPayment(uint256 paymentId)`
- `updateRecurringPayment(uint256 paymentId, uint96 newAmount, uint64 newInterval)`

### View
- `getActivePaymentIds()`
- `getPaymentStats()`
- `canProcessPayment(uint256 paymentId)`

## Business Model

### Revenue Streams

1. Transaction Fees (0.5% per payment, volume discounts available)
2. Premium Features
  * Advanced analytics: $49/month
  * API access: $199/month+
  * Custom integrations
3. Enterprise Solutions ($999/month+)
  * Dedicated support
  * Custom smart contracts
  * Compliance reporting

### Market Focus
* Small-medium businesses (5-200 employees)
* Web3 organizations  
* International companies


## Troubleshooting

1. **Wallet Issues**
   - Verify network (Mainnet/Testnet)
   - Check GAS balance
   - Ensure correct RPC settings

2. **Transaction Failures**
   - Confirm GAS balance
   - Verify recipient address
   - Check payment parameters

## License
MIT License
