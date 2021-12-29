const {SecureTrie:Trie} = require('merkle-patricia-tree');
const {Account,BN,bufferToHex} = require("ethereumjs-util")
const level = require('level')
const RLP = require('rlp');

var db = level('/mnt/c/Users/jadon/Desktop/leveldb/test.db');

var root = '0x1528aa59b9ec8474ab360126f99fca38d7d68d343a13e4473219f94472d3685e';
var address="0xEa9e99ac4AEc05359bCbbaacbe0a35525dE320a9"


async function test() {
    let bf = Buffer.from(root.slice(2),"hex")
    let ad=Buffer.from(address.slice(2),"hex")
    var trie = new Trie(db, bf);
    console.log(trie)

    const data = trie.get(ad)
    console.log(await data)
    const acc = new Account(data)

    console.log('-------State-------')
    console.log(`nonce: ${new BN(acc.nonce)}`)
    console.log(`balance in wei: ${new BN(acc.balance)}`)
    console.log(`storageRoot: ${bufferToHex(acc.stateRoot)}`)
    console.log(`codeHash: ${bufferToHex(acc.codeHash)}`)
    
    /*
    let storageTrie = trie.copy()
    storageTrie.root = 
    const stream = storageTrie.createReadStream()

    stream
        .on('data', (data) => {
        console.log(`key: ${bufferToHex(data.key)}`)
        console.log(`Value: ${bufferToHex(RLP.decode(data.value))}`)
        })
        .on('end', () => {
        console.log('Finished reading storage.')
        })*/
}
//test()
test()