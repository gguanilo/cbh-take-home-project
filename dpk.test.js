const crypto = require('crypto');
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it('returns the partition key when it exists in the event', () => {
    const event = { partitionKey: "test-key" };
    const result = deterministicPartitionKey(event);
    expect(result).toBe("test-key");
  });

  it('hashes the event when partition key is not provided', () => {
    const event = { data: "test-data" };
    const expectedHash = crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
    const result = deterministicPartitionKey(event);
    expect(result).toBe(expectedHash);
  });

  it('converts candidate to a string when it is not already a string', () => {
    const event = { partitionKey: 123 };
    const result = deterministicPartitionKey(event);
    expect(typeof result).toBe("string");
  });

  it('hashes candidate when its length exceeds the maximum partition key length', () => {
    const longKey = "a".repeat(257);
    const expectedHash = crypto.createHash("sha3-512").update(longKey).digest("hex");
    const event = { partitionKey: longKey };
    const result = deterministicPartitionKey(event);
    expect(result).toBe(expectedHash);
  });
});
