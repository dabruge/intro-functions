const { check, runTest } = require("../test-api/index");

function containsNoRepeats(str) {
  // This function should take a string as its argument and return true if each character appears only once and false otherwise

  const exists = {}

  for (const char of str) {
    if (!(char in exists)) {
      exists[char] = 1
    } else {
      return false;
    }
  }

  return true
}

runTest("containsNoRepeats() returns true for an empty string", function () {
  check(containsNoRepeats("")).isEqualTo(true);
});

runTest(
  "containsNoRepeats() returns false for a single repeated chara  cter",
  function () {
    check(containsNoRepeats("oo")).isEqualTo(false);
    check(containsNoRepeats("zzz")).isEqualTo(false);
  }
);

runTest(
  "containsNoRepeats() returns true when each character appears only once",
  function () {
    check(containsNoRepeats("dog")).isEqualTo(true);
    check(containsNoRepeats("cat")).isEqualTo(true);
    check(containsNoRepeats("abcde")).isEqualTo(true);
  }
);

runTest(
  "containsNoRepeats() returns false if any characters are repeated",
  function () {
    check(containsNoRepeats("dooog")).isEqualTo(false);
    check(containsNoRepeats("iHaveRepeats")).isEqualTo(false);
    check(containsNoRepeats("anat")).isEqualTo(false);
    check(containsNoRepeats("abcdea")).isEqualTo(false);
  }
);
