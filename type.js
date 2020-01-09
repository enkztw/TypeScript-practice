var isFetching = true;
var isLoading = false;
var int = 42;
var float = 3.14;
var number = 3e10;
var message = 'TypeScript is UNDEFINED';
var messages = ['Hi There', 'Bye', 'ayy lmao'];
var numbers = [1, 3, 2, 2, 1, 4]; // Generic Types
// Tuple
var ownInfo = ['Max', 162];
// Any
var something = 'Nope, anything';
something = 42;
var sayMyName = function (name) {
    console.log(name);
};
// Never
var throwSomeError = function (message) {
    throw new Error(message);
};
