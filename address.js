// address.js

const CONTRACT_ADDRESS = "0xbd61721063343EC6CCD7c077a11c1cD200AAFB40"; // آدرس توکن LYNX که دادی

const CONTRACT_ABI = [
  // فقط متدهایی که نیاز داریم (مثل balanceOf و decimals)
  {
    "constant": true,
    "inputs": [{"name": "_owner", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"name": "balance", "type": "uint256"}],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{"name": "", "type": "uint8"}],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{"name": "", "type": "string"}],
    "type": "function"
  }
];
