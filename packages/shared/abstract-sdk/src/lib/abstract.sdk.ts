import {
  ExchangeRateService,
  IpfsService,
  MaliciousAddressService,
  NotificationSubscriptionsService,
  ServiceUtilsService,
  TatumApi,
  TatumUrlArg,
} from '@tatumio/api-client'
import { abstractSdkVirtualAccount } from './services/virtualAccount.abstract'
import { abstractSdkKms } from './services/kms.abstract'
import { abstractSdkNftService } from './services/nft.abstract'
import { abstractSdkLedgerService } from './services/ledger.abstract'
import { abstractSdkCustodialManagedWallets } from './services/custodial.abstract'

export interface SDKArguments {
  apiKey: string
  url?: TatumUrlArg
  provider?: string
}

export const abstractSdk = (args: SDKArguments) => {
  TatumApi(args.apiKey, args.url)

  return {
    storage: {
      upload: IpfsService.storeIpfs,
      get: IpfsService.getIpfsData,
    },
    subscriptions: NotificationSubscriptionsService,
    security: {
      checkMaliciousAddress: MaliciousAddressService.checkMalicousAddress,
    },
    tatum: {
      getCredits: ServiceUtilsService.getCredits,
      getVersion: ServiceUtilsService.getVersion,
      freezeApiKey: ServiceUtilsService.freezeApiKey,
      unfreezeApiKey: ServiceUtilsService.unfreezeApiKey,
    },
    custodialManagedWallet: abstractSdkCustodialManagedWallets(),
    virtualAccount: abstractSdkVirtualAccount(),
    nft: abstractSdkNftService(),
    kms: abstractSdkKms(),
    getExchangeRate: ExchangeRateService.getExchangeRate,
    ledger: abstractSdkLedgerService(),
  }
}
