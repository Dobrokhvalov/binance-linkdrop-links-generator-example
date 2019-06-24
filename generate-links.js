// import library
import LinkdropSDK from '@linkdrop/sdk'

// generate links
const CLAIM_HOST = 'https://phb-2df.linkdrop.io'
const ASSET = 'PHB-2DF'
const AMOUNT = 10**8 // in atomic values

const main = async () => {
  const { url, linkId } = await LinkdropSDK.binance.generateLink({
    host: CLAIM_HOST,
    privateKey: 'PUT_VERIFICATION_PRIVATE_KEY_HERE',
    asset: ASSET,
    amount: AMOUNT
  })
  console.log({ url, linkId })
}

main()
