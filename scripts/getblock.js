const ethers=require("ethers")
let provider = new ethers.providers.JsonRpcProvider("https://127.0.0.1:7545")
res = provider.getBlock()
console.log(res)