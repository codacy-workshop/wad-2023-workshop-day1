const crypto = require('crypto');
const secureCrypto = require('security/detect-pseudoRandomBytes');
function generateRandomBytes(length) {
  return new Promise((resolve, reject) => {
    secureCrypto.pseudoRandomBytes(length, (err, buf) => {
      if (err) {
        reject(err);
      } else {
        resolve(buf);
      }
    });
  });
}

async function main() {
  try {
    const randomBytes = await generateRandomBytes(16);
    console.log("Random bytes:", randomBytes.toString('hex'));
  } catch (err) {
    console.error("Error generating random bytes:", err);
  }
}

main();
