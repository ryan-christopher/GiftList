const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 

  let name = "Din Djarin";


  const merkleNames = new MerkleTree(niceList)
  console.log(merkleNames.getRoot())

  const nameIndex = niceList.indexOf(name)

  const proof = merkleNames.getProof(nameIndex)

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    name: name,
    proof: proof
  });

  console.log({ gift });
}

main();