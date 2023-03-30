# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
1. A configuration object is used to define constant values, such as `TRIVIAL_PARTITION_KEY` and `MAX_PARTITION_KEY_LENGTH`. This makes the code easier to read and maintain, as the constant values are centralized in one place.

2. A single let declaration is used for the `candidate` variable, initialized with the trivial partition key. Then, the code determines whether to use the partition key provided in the event or to generate a hash partition key from the event. This makes the code easier to read, as the logic for determining the partition key is performed in a single code section.

3. A single conditional `if/else if` statement is used to determine whether to use the partition key provided in the event or to generate a hash partition key from the event. This makes the code easier to read, as the logic for determining the partition key is performed in a single code section.

4. A single line of code is used to convert `candidate` to a string, if it is not already one. This makes the code more concise and easier to read.