const crypto = require('crypto');

function generateRandomBytes(length) {
  return new Promise((resolve, reject) => {
    crypto.pseudoRandomBytes(length, (err, buf) => {
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