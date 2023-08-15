import miner from "../utils/miner";

const onmessage = (event) => {
  const data = event.data;
  const challenge = data[0]
  const address = data[1]

  const { digest, nonce } = miner(challenge, address)
  console.log(`mining | ${digest} | ${nonce}`)
  postMessage([digest, nonce])
};

addEventListener('message', onmessage);