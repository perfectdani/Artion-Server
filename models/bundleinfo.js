const mongoose = require("mongoose");

const BundleInfo = mongoose.Schema({
  contractAddress: { type: String, required: true },
  bundleID: { type: String, required: true },
  tokenID: { type: Number, required: true },
  supply: { type: Number, required: true },
});
BundleInfo.index(
  { contractAddress: 1, bundleID: -1, tokenID: 1 },
  { unique: true }
);

mongoose.model("BundleInfo", BundleInfo);
