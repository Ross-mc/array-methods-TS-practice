# Custom Array Methods

The repository is a just a fun little project to recreate the built in Array methods added to JS in ES6.

The primary purpose of this project is to practice Typescript and TDD, with the Array methods just providing the context for the code.

The array methods are typesafe and expect a single datatype within the array. This was done just for simplicity. I have made use of typscript generics so that typescript can infer the return value more efficiently.

To recreate this project, clone the repository with `git clone` and install dependencies with `npm i`.

Tests can be ran with `npm run test` with the option `-t` flag for specific tests, for example `npm run test -t map` to run the tests included in `map.spec.ts`

To test the performance of my custom implementations of the ES6 array methods I have provided a benchmark script which tests my implementations against the standard implementations (currently just for map). Tp run the benchmark use command `npm run benchmark`.

A large array of numbers is generated (defaulted to 1 million with numbers up to 100,000 in value but can be edited with command line arguments e.g. `npm run benchmark 100 50` to run the benchmark against an array of 100 length with numbers up to 50 in value).

Generally speaking, my custom implementations run in about the same time (circa 30ms) as the built in methods. For clarity, I have not looked at the actual implmentation of the array methods in ECMAScript standards, this is just how I imagine they could have been designed. I imagine there is a lot more complexity involved.