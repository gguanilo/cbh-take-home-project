const crypto = require("crypto");

const config = {
  TRIVIAL_PARTITION_KEY: "0",
  MAX_PARTITION_KEY_LENGTH: 256,
};

exports.deterministicPartitionKey = (event) => {
  let candidate = config.TRIVIAL_PARTITION_KEY;

  if (event && event.partitionKey) {
    candidate = event.partitionKey;
  } else if (event) {
    const data = JSON.stringify(event);
    candidate = crypto.createHash("sha3-512").update(data).digest("hex");
  }

  candidate = typeof candidate === "string" ? candidate : JSON.stringify(candidate);

  if (candidate.length > `${config.MAX_PARTITION_KEY_LENGTH}`) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  return candidate;
};