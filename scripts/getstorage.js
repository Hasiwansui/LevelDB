const ethers=require("ethers")
const { hexZeroPad, keccak256, RLP, toUtf8String} = require("ethers/lib/utils")
async function getStorageAt(address,position,blocknumber){
    let provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.alchemyapi.io/v2/1SkKQBHa0LUq08dcam0_2sIDaGOXZH4m")
    let result = await provider.getStorageAt(address,position,blocknumber)
    console.log(result)
    return result
}

function mapKey(key,position){
    let left = hexZeroPad(key,32)
    let right = hexZeroPad(position,32)
    console.log("left",left,"right",right)
    let result = keccak256(left+right.slice(2))    
    console.log("result",result)
    return result
}
async function logUint256(pro){
    result = await pro
    console.log(ethers.BigNumber.from(result).toString()) 
}
//getStorageAt()
//mapKey("0x391694e7e0b0cce554cb130d723a9d27458f9298","0x1")
logUint256(getStorageAt("0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852",mapKey("0x14117f61f9c74bc00a6a7b4d87f41f751bac6eb7","0x1"),13880160))

