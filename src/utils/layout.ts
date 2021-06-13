import * as BufferLayout from 'buffer-layout';

/**
 * Layout for a public key
 */
 const publicKey = (property = "publicKey") => {
  return BufferLayout.blob(32, property);
 };

export const FundAccountDataLayout = BufferLayout.struct([
  BufferLayout.u8('isInitialized'),
  publicKey('ownerPubkey'),
  publicKey('fundTokenMintPubkey'),
  BufferLayout.seq(publicKey(), 8, 'assetTokenAccounts'),
  BufferLayout.seq(publicKey(), 8, 'assetMintAccounts'),
  BufferLayout.seq(BufferLayout.nu64(), 8, 'balances'),
  BufferLayout.nu64('totalSupply'),
  BufferLayout.nu64('createdAt'),
]);
