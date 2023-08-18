import * as ethers from 'ethers'

const generateNonce = () => {
  const rand = ethers.utils.randomBytes(32)
  return ethers.utils.hexlify(rand)
}

const miner = (challenge, address) => {
  const nonce = generateNonce()
  return {
    digest: ethers.utils.solidityKeccak256(['bytes32', 'address', 'uint256'], [challenge, address, nonce]),
    nonce: nonce
  }
}

export default miner