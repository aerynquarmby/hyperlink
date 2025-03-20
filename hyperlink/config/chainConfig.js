// config/chainConfig.js

export const chainConfig = {
    Base: {
      chainName: 'Base',
      chainIcon:
        'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/eth.png',
      total: '$12.76', // per your mock
  
      gasToken: 'ETH',
      chainId: '8453',
      gasTokenUuid: 'razxDUgYGNAdQ',
      gasTokenDecimals: 18,
  
      // Tokens matching your mock: cWBTC, USDC, WBNB
      fromCurrency: {
        cWBTC: {
          label: 'Coinbase Wrapped BTC',
          symbol: '0.00029172 cWBTC',
          value: '$4.92',
          icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/btc.png',
        },
        USDC: {
          label: 'USDC',
          symbol: '4.91 USDC',
          value: '$4.92',
          icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/usdc.png',
        },
        WBNB: {
          label: 'Wrapped BNB',
          symbol: '0.000291 WBNB',
          value: '$4.92',
          icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/bnb.png',
        },
      },
  
      // (If you need toCurrency, keep it, but it’s not displayed in the mock)
      toCurrency: {},
      rpcUrl:
        'https://purple-stylish-star.base-mainnet.quiknode.pro/471e9e9fd069b3e108077b1e8bb5c29c889e8db3/',
      spenderAddress: '0xAc3dB8F2221d8260eE96bdb46b95E008F81AC6c9',
    },
  
    Polygon: {
      chainName: 'Polygon',
      chainIcon:
        'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/matic.png',
      total: '$12.17',
  
      gasToken: 'MATIC',
      chainId: '137',
      gasTokenUuid: 'uW2tk-ILY0ii',
      gasTokenDecimals: 18,
  
      fromCurrency: {
        // Example single token. Add more as you like
        WMATIC: {
          label: 'Wrapped MATIC',
          symbol: '1.2 WMATIC',
          value: '$12.17',
          icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/matic.png',
        },
      },
      toCurrency: {},
      rpcUrl:
        'https://quiet-alpha-card.matic.quiknode.pro/c29dcda8375770b9a14f0c8abd032661e0efee5c/',
      spenderAddress: '0xba0Ca059B992A7bb1364dde913cC92f9DC1ea3d3',
    },
  
    Bnb: {
      chainName: 'BNB Chain',
      chainIcon:
        'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/bnb.png',
      total: '$11.30',
  
      gasToken: 'BNB',
      chainId: '56',
      gasTokenUuid: 'WcwrkfNI4FUAe',
      gasTokenDecimals: 18,
  
      fromCurrency: {
        BTCB: {
          label: 'BTCB',
          symbol: '0.01 BTCB',
          value: '$11.30',
          icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/btc.png',
        },
      },
      toCurrency: {},
      rpcUrl:
        'https://damp-wider-panorama.bsc.quiknode.pro/ca6533d1c5e49a61acd2e9f60ad34b28392a1e44/',
      spenderAddress: '0xAc3dB8F2221d8260eE96bdb46b95E008F81AC6c9',
    },
  
    Avalanche: {
      chainName: 'Avalanche',
      chainIcon:
        'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/avax.png',
      total: '$9.58',
  
      gasToken: 'AVAX',
      chainId: '43114',
      gasTokenUuid: 'dvUj0CzDZ',
      gasTokenDecimals: 18,
  
      fromCurrency: {
        WAVAX: {
          label: 'Wrapped AVAX',
          symbol: '0.2 WAVAX',
          value: '$9.58',
          icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/avax.png',
        },
      },
      toCurrency: {},
      rpcUrl:
        'https://attentive-sleek-hexagon.avalanche-mainnet.quiknode.pro/ed02a7c1df94f7f5df5af0f9980ce22cdc3b08b3/ext/bc/C/rpc/',
      spenderAddress: '0xAc3dB8F2221d8260eE96bdb46b95E008F81AC6c9',
    },
  
    Arbitrum: {
      chainName: 'Arbitrum',
      chainIcon:
        'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/eth.png',
      total: '$6.88',
  
      gasToken: 'ETH',
      chainId: '42161',
      gasTokenUuid: 'razxDUgYGNAdQ',
      gasTokenDecimals: 18,
  
      fromCurrency: {
        LINK: {
          label: 'Chainlink',
          symbol: '12 LINK',
          value: '$6.88',
          icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/link.png',
        },
      },
      toCurrency: {},
      rpcUrl:
        'https://winter-maximum-fire.arbitrum-mainnet.quiknode.pro/5e2f22965a744a7a8eebadbc7b73d8475454b55e/',
      spenderAddress: '0x96a7Ce8Fb73fABD172850870adDA2b565033C949',
    },
  
    Ethereum: {
      chainName: 'Ethereum',
      chainIcon:
        'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/eth.png',
      total: '$0.66',
  
      // This is not in your original config, but adding for the mock design
      fromCurrency: {
        WETH: {
          label: 'Wrapped ETH',
          symbol: '0.0004 WETH',
          value: '$0.66',
          icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/eth.png',
        },
      },
    },
  
    Optimism: {
      chainName: 'Optimism',
      chainIcon:
        'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/eth.png',
      total: '$0.00',
      fromCurrency: {},
    },
  
    Linea: {
      chainName: 'Linea',
      chainIcon:
        'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/eth.png',
      total: '$0.00',
      fromCurrency: {},
    },
  };
  