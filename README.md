# Payment Playground

A standalone Next.js application for testing and experimenting with Base Account SDK payment functionality.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone this repository:
```bash
git clone <your-repo-url>
cd payment-playground
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

This playground allows you to:
- Test Base Account SDK payment integration
- Execute payment transactions
- View real-time output and console logs
- Experiment with different payment scenarios

## Code Editor

The playground includes an interactive code editor with:
- Syntax highlighting
- Real-time execution
- Console output capture
- Quick tips for common operations

## Project Structure

```
payment-playground/
├── src/
│   ├── components/     # React components
│   ├── constants/      # Configuration and constants
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Next.js pages
│   ├── styles/        # CSS modules and global styles
│   └── utils/         # Utility functions
├── public/            # Static assets
├── package.json       # Project dependencies
└── README.md         # This file
```

## Dependencies

- **@base-org/account**: Base Account SDK for wallet integration
- **@coinbase/onchainkit**: Coinbase's onchain development kit
- **next**: React framework for production
- **react** & **react-dom**: React library
- **viem**: TypeScript interface for Ethereum
- **wagmi**: React hooks for Ethereum

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run linter
- `npm run format` - Format code
- `npm run check` - Run all checks

## License

This project is licensed under the MIT License. 