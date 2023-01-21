const MarketplaceMigration = artifacts.require("ServiceMarketplace");

module.exports = function (deployer) {
  deployer.deploy(MarketplaceMigration);
};