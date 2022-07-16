/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const set = new Set();
  for (const email of emails) {
    const [local, domain] = email.split("@");
    const [use, ,] = local.split("+");
    const useRemoveDot = use.replaceAll(".", "");
    const str = `${useRemoveDot}@${domain}`;
    set.add(str);
  }

  return set.size;

  // const resSet = new Set();
  // for (const email of emails) {
  //   const eArr = [];
  //   let hasAt = false;
  //   let hasPlus = false;
  //   for (const ch of email) {
  //     if (hasAt || ch === "@") {
  //       eArr.push(ch);
  //       hasAt = true;
  //       continue;
  //     }

  //     if (hasPlus || ch === ".") {
  //       continue;
  //     }

  //     if (ch === "+") {
  //       hasPlus = true;
  //       continue;
  //     }
  //     eArr.push(ch);
  //   }
  //   resSet.add(eArr.join(""));
  // }

  // return resSet.size;
};

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
);
