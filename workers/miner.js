import miner from "../utils/miner";

const mining = async (postMessage, data, count, startTime) => {
  const challenge = data[0]
  const address = data[1]
  const targetDifficulty = data[2]

  const { digest, nonce } = miner(challenge, address)
  postMessage(['counter', count + 1, startTime])

  if (parseInt(digest) < targetDifficulty) {
    try {
      console.log('dapet')
      postMessage(['solved', digest, nonce])
    } catch (err) {
      console.log(err)
    }
  }
  else {
    setTimeout(() => {
      mining(postMessage, data, count + 1, startTime)
    }, 0)
  }
}

const onmessage = async (event) => {
  const data = event.data
  const startTime = new Date().getTime()
  mining(postMessage, data, 0, startTime)
};

addEventListener('message', onmessage)