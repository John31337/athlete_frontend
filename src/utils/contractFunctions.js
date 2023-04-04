import Web3 from "web3";
import marketplace from "../contracts/marketplace.json";
import erc721ABI from "../contracts/erc-721.abi.json";

const web3 = new Web3(window.ethereum);

export const getNFTs = async (_id) => {
    const nfts = [
        {
            name: 'Landynn OG1',
            creator: "Arthur",
            price: 1.2   
        },
        {
            name: 'Landynn OG2',
            creator: "Arthur",
            price: 1.2   
        },
        {
            name: 'Landynn OG3',
            creator: "Arthur",
            price: 1.2   
        },
        {
            name: 'Landynn OG4',
            creator: "Arthur",
            price: 1.2   
        },
        {
            name: 'Landynn OG5',
            creator: "Arthur",
            price: 1.2   
        },
        {
            name: 'Landynn OG6',
            creator: "Arthur",
            price: 1.2   
        },
        {
            name: 'Landynn OG7',
            creator: "Arthur",
            price: 1.2   
        },
        {
            name: 'Landynn OG8',
            creator: "Arthur",
            price: 1.2   
        },
        {
            name: 'Landynn OG9',
            creator: "Arthur",
            price: 1.2   
        }
    ]
    return nfts;
}

export const getERC721Contract = async (address) => {
    const _contract = await _getContract(address, erc721ABI);
    return _contract;
}

const _getContract = async (address, abi) => {
    const _contract = await new web3.eth.Contract(abi, address);
    return _contract;
}