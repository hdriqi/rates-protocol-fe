import * as ethers from 'ethers'

const generateNonce = () => {
  const rand = ethers.utils.randomBytes(16)
  return ethers.utils.hexlify(rand)
}

const miner = (challenge, address) => {
  const nonce = generateNonce()
  return {
    digest: ethers.utils.solidityKeccak256(['uint256', 'uint256', 'uint256'], [challenge, address, nonce]),
    nonce: nonce
  }
}

export default miner