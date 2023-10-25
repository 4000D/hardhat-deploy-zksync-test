# Sample hardhat project

Deploy transparent proxy and diamond proxy with `@4000d/hardhat-deploy@0.11.45-rc.5`([modified hardhat-deploy](https://github.com/4000d/hardhat-deploy/tree/custom-publish)).

## Install

```bash
pnpm install
```

## Build

```bash
npm run build
```

## Deploy contracts to zksync era goerli testnet

```bash
cp .env.sample .env # then set MNEMONIC env var

npm run deploy
```
