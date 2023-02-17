/*
  Kopimi 2013-2023 iuri.neocities.org
  Use sem citar a fonte
*/
function toggleNft(target = 0) {
  let nftMap = {
    "1": {
      "vid": "https://gateway.fxhash2.xyz/ipfs/QmWkR6jPFmdED1tGoQ6nB7buFRtAQLPgspFNundXea5QsD/?fxhash=ooC8rtUWVcCjarygV2DSUjFjKg8oPViKBqWBLbCrgvoYKaxgmVc",
      "img": "https://gateway.fxhash.xyz/ipfs/QmXt167vqPy1RZfYp7PmMtxfCLdBA3EW6p5oWXRhFyWqTz",
      "url": "https://www.fxhash.xyz/generative/24631"
    },
    "2": {
      "vid": "https://gateway.fxhash2.xyz/ipfs/QmQxbjcAHqAFXreuikqu8ZeLAez1LCERGPmhzphJUUHTFd/?fxhash=ooVFcFgGXgvmDHPWV5WZTZxjNW8qVXfHY7GG7husNY7mEwnaupZ",
      "img": "https://gateway.fxhash.xyz/ipfs/QmWHotS6RXTTi74G1ch9J5oyTpbmEpHsoHcqYGyAcJzijp",
      "url": "https://www.fxhash.xyz/generative/24810"
    },
    "3": {
      "vid": "https://gateway.fxhash2.xyz/ipfs/QmPHYvcMffytV8u8svehH3HDFrDydEZDfkYGtcjw2bd6Rs/?fxhash=ooybyoBz3RdMJ2aKgpkCNK8HUY1dXnYshsLcPCTEf9wdKoPA5se",
      "img": "https://gateway.fxhash.xyz/ipfs/QmaxwnuQt1oXCY2a28QuyZrW3oP19MhcEtSLsUrzXW26ph",
      "url": "https://www.fxhash.xyz/generative/24849"
    },
    "4": {
      "vid": "https://gateway.fxhash2.xyz/ipfs/QmQxbjcAHqAFXreuikqu8ZeLAez1LCERGPmhzphJUUHTFd/?fxhash=ooVFcFgGXgvmDHPWV5WZTZxjNW8qVXfHY7GG7husNY7mEwnaupZ",
      "img": "https://gateway.fxhash.xyz/ipfs/QmZidbwTAv6zsXdbmwarMhxHNCzGmeVZZHjtDQYG6bUaGq",
      "url": "https://www.fxhash.xyz/generative/24912"
    },
    "5": {
      "vid": "https://gateway.fxhash2.xyz/ipfs/QmPdS6PcRCWyic9Kn5ehWg2ZwzAkBDhZcPjXPfm7jmH4k1/?fxhash=ooP3nRfv2FjgR75ME2Eig1T4NWQPR7qRaPDyXVicnY2Cb6vFmJh",
      "img": "https://gateway.fxhash.xyz/ipfs/QmbXvvKsznvUtwFPKt7ii73iqik1sGqB8ieN2TnroF2Rk9",
      "url": "https://www.fxhash.xyz/generative/24979"
    },
    "6": {
      "vid": "https://gateway.fxhash2.xyz/ipfs/QmQKotYyEVAxEi1RCnnpQ3oWbH5fU187UDA7wHNZDB1Sne/?fxhash=oofMLCYts7b43ZAsCaAUjUgz8wwuwEVRi2Fi5DPLHWQ3b2TAPMG",
      "img": "https://gateway.fxhash.xyz/ipfs/QmTFoBxyZDbdtRdQqKJfKvxnue9E4ePnpB4ALNFzkN2X4G",
      "url": "https://www.fxhash.xyz/generative/25018"
    }
  };
  for (let i = 1; i <= Object.keys(nftMap).length; i++) {
      let iframe = document.getElementById('nft' + i);
      iframe.src = "";
  }
  try {
    let iframe = document.getElementById('nft' + target);
    iframe.src = nftMap[target]["vid"];
  } catch {}
}

window.toggleNft = toggleNft;
