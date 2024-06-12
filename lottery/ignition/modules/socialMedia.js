const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Dapp", (m) => {
  const socialMedia = m.contract("socialMediacontract");

  m.call(socialMedia, "deploy", []);

  return { socialMedia };
});