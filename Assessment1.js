// create a variable to hold your NFT's
let numberOfNFTs = 0;

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, description, item) {
  const nft = {
    name: name,
    description: description,
    item: item
  };

  numberOfNFTs++;

  return nft;
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs(nfts) {
  for (let i = 0; i < nfts.length; i++) {
    console.log("Name: " + nfts[i].name);
    console.log("Description: " + nfts[i].description);
    console.log("Item: " + nfts[i].item);
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("Total Supply: " + numberOfNFTs);
}

// call your functions below this line

const nft1 = mintNFT("NFT 1", "This is first NFT", "Phone");
const nft2 = mintNFT("NFT 2", "This is second NFT", "TV");
const nft3 = mintNFT("NFT 3", "This is third NFT", "Watch");

const nfts = [nft1, nft2, nft3];

listNFTs(nfts);
getTotalSupply();
