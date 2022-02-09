import { db, getClientByBlockChain } from "../../firebase/firebase";
//import { bid } from "../../blockchain/index"

// initial state
const state = () => ({
  auction: baseAuction,
});

const baseAuction = {
  by: "",
  dateEnd: "",
  dateStarts: "",
  minimumPrice: 0,
  minimumPriceCoin: 1,
  minimumPriceIncrement: 0,
  minimumPriceIncrementCoin: "",
  startingPrice: 0,
  startingPriceCoin: "",
  status: "",
  timeEnd: "",
  timeStarts: "",
  timesatampStart: "",
  timesatampEnd: "",
  wonBy: "",
  wonPrice: "",
  lastBidValue: 0,
  bids: [],
};

// getters
const getters = {};

/* const formatDate = () => {
  var d = new Date(),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear(),
    hours = d.getHours().toString(),
    minutes = d.getMinutes().toString();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  if (hours.length < 2) hours = "0" + hours;
  if (minutes.length < 2) minutes = "0" + minutes;

  return `${[year, month, day].join("-")} ${[hours, minutes].join(":")}`;
}; */

// actions
const actions = {
  async getAuction({ commit }, payload) {
    commit("clearAuction");
    const data = await db.collection("auctions").doc(payload).get();

    commit("getAuction", data.data());
  },
  async finishAuction({ commit, dispatch }, payload) {
    let auctionBids = await db
      .collection("bids")
      .where("auctionId", "==", payload.auctionref)
      .get();

    const simpleBids = auctionBids.docs.map((entry) => entry.data());
    const max = simpleBids.reduce((a, b) => {
      return a.amount > b.amount ? a : b;
    });

    const updates = {
      wonBy: max.fromAddress,
      wonPrice: max.amount,
      status: "sold",
    };

    await db.collection("auctions").doc(payload.auctionref).update(updates);

    commit("setWinner", updates);

    await db
      .collection("nfts")
      .doc(payload.nftRef)
      .update({ blockchainOwner: max.fromAddress });

    dispatch(
      "user/addNft",
      { nft: payload.nftRef, address: max.fromAddress },
      { root: true }
    );
  },
  async setBids({ commit }, payload) {
    let currentAuctions = await db
      .collection("auctions")
      .doc(payload.auctionref)
      .get();

    let bids = currentAuctions.data().bids || [];

    const client = await getClientByBlockChain(payload.address);
    let username = client.data.username;

    const payloadbid = {
      from: username,
      fromAddress: payload.address,
      amount: payload.amount,
      transactionHash: payload.transactionHash,
      status: 'pending',
      date: new Date().toISOString(),
      auctionId: payload.auctionref,
    };

    const bidRef = await db.collection("bids").add(payloadbid);

    bids.push(bidRef.id);

    await db
      .collection("auctions")
      .doc(payload.auctionref)
      .update({ lastBidValue: payloadbid.amount, bids: bids });

    commit("setBids", payloadbid);
  }
};

// mutations
const mutations = {
  getAuction(state, payload) {
    state.auction = payload;
  },
  setBids(state, payload) {
    console.log(payload);
    console.log(state.auction.bids);
    console.log([...state.auction.bids, payload]);
    state.auction.bids = [...state.auction.bids, payload];
    state.auction.lastBidValue = payload.amount;
  },
  setWinner(state, payload) {
    console.log(payload);
    state.auction.wonBy = payload.wonBy;
    state.auction.wonPrice = payload.wonPrice;
    state.auction.status = payload.status;
  },
  clearAuction(state) {
    state.auction = baseAuction;
  },
  clearBids(state) {
    state.auction.bids = [];
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
