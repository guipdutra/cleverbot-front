const CURRENCY_CODES = {
  177 :	'BTC_ARDR',
  253 :	'BTC_ATOM',
  210 :	'BTC_BAT',
  148	: 'BTC_ETH',
  189 :	'BTC_BCH',
  236 :	'BTC_BCHABC',
  238 : 'BTC_BCHSV',
  7  	: 'BTC_BCN'  ,
  232	: 'BTC_BNT'  ,
  14	: 'BTC_BTS'  ,
  15	: 'BTC_BURST',
  20	: 'BTC_CLAM' ,
  194	: 'BTC_CVC'  ,
  24	: 'BTC_DASH' ,
  162	: 'BTC_DCR'  ,
  25	: 'BTC_DGB'  ,
  27	: 'BTC_DOGE' ,
  201	: 'BTC_EOS'  ,
  171	: 'BTC_ETC'  ,
  155	: 'BTC_FCT'  ,
  246	: 'BTC_FOAM' ,
  38	: 'BTC_GAME' ,
  198	: 'BTC_GAS'  ,
  185	: 'BTC_GNT'  ,
  251	: 'BTC_GRIN' ,
  43	: 'BTC_HUC'  ,
  207	: 'BTC_KNC'  ,
  167	: 'BTC_LBC'  ,
  213	: 'BTC_LOOM' ,
  250	: 'BTC_LPT'  ,
  163	: 'BTC_LSK'  ,
  50	: 'BTC_LTC'  ,
}

const getCurrency = (currencyCode) => {
  return CURRENCY_CODES[currencyCode]
}

const getAllCurrenciesKeys = () => {
  return Object.keys(CURRENCY_CODES)
}

export default { getCurrency, getAllCurrenciesKeys }
