# Aragon Block Explorer

[Demo](https://aragon.zarazas.now.sh/)

Install dependencies:

```
yarn || npm i
```

Start development server:

```
yarn dev || npm run dev
```

Build application to start in production-mode:

```
yarn build || npm run build
```

Start in production:

```
yarn start || npm run start
```

Analyze Bundle:

```
yarn analyze || npm run analyze
```

## Some Notes:

I wanted to use the aragon-ui library for this, but it seems it's not compatible with next.js or SSR in general.

There were some problems with the Web3-types, so I had to use the UMD `require` syntax and `any` to go around that: [Issue](https://github.com/ethereum/web3.js/issues/1597). Sadly this also increases the bundle size

I know, that the app is not optimized for mobile, because it's always a hassle with these tables on mobile. If you want though, I can do it.
