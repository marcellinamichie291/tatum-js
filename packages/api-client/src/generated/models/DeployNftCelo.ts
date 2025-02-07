/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeployNftCelo = {
    /**
     * Chain to work with.
     */
    chain: 'CELO';
    /**
     * Name of the NFT token
     */
    name: string;
    /**
     * True if the contract is provenance percentage royalty type. False by default. <a href="https://github.com/tatumio/smart-contracts" target="_blank">Details and sources avaiable here.</a>
     */
    provenance?: boolean;
    /**
     * True if the contract is fixed price royalty type. False by default. <a href="https://github.com/tatumio/smart-contracts" target="_blank">Details and sources avaiable here.</a>
     */
    cashback?: boolean;
    /**
     * True if the contract is publicMint type. False by default.
     */
    publicMint?: boolean;
    /**
     * Symbol of the NFT token
     */
    symbol: string;
    /**
     * Private key of Ethereum account address, from which gas for deployment of ERC721 will be paid. Private key, or signature Id must be present.
     */
    fromPrivateKey: string;
    /**
     * Nonce to be set to Ethereum transaction. If not present, last known nonce will be used.
     */
    nonce?: number;
    /**
     * Currency to pay for transaction gas
     */
    feeCurrency: 'CELO' | 'CUSD' | 'CEUR';
}
