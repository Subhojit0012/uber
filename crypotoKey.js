import crypto from "node:crypto";

const GENERATE_KEY = crypto.generateKey("hmac", { length: 64 }, (err, key) => {
  if (err) err.message;

  console.log(key.export().toString("hex"));
});

console.log(GENERATE_KEY);
