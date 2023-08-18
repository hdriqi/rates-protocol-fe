import miner from "../utils/miner";

const mining = async (postMessage, data) => {
  const challenge = data[0]
  const address = data[1]
  const targetDifficulty = data[2]

  const { digest, nonce } = miner(challenge, address)

  if (parseInt(digest) < targetDifficulty) {
    try {
      console.log('dapet')
      postMessage([digest, nonce])
    } catch (err) {
      console.log(err)
    }
  }
  else {
    setTimeout(() => {
      mining(postMessage, data)
    }, 0)
  }
}

const onmessage = async (event) => {
  const data = event.data
  mining(postMessage, data)
};

addEventListener('message', onmessage)