const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || !Array.isArray(members) || members.length < 1) return false;
  return members
    .filter((member) => typeof member === "string" && member.replace(/\s/g, "") !== "")
    .map((member) => {
      return member.replace(/\s/g, "")[0].toUpperCase();
    })
    .sort()
    .join("");
};
