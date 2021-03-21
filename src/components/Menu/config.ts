import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.icebergdefi.com/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'IcebergIcon',
    href: 'https://www.icebergdefi.com/farms'
  },
  {
    label: 'Titanic',
    icon: 'Titanic2Icon',
    href: 'https://www.icebergdefi.com/titanic'
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.goosedefi.com/lottery'
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xe9c97e26de6f4109e041736867789e789dc904d3',
      },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/goose-finance',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/goose-finance/',
      // },
      // {
      //   label: 'AstroTools',
      //   href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      // },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/icebergfinance/",
      },
      {
        label: "Docs",
        href: "https://docs.icebergdefi.com/",
      },
      {
        label: "Blog",
        href: "https://icebergfinance.medium.com/",
      },
    ],
  },
  {
    label: 'Audit',
    icon: 'AuditIcon',
    href: 'https://github.com/icebergfinance/iceberg-audits',
  },
]

export default config
