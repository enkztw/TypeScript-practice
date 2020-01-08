let isFetching: boolean = true;
let isLoading: boolean = false;

const int: number = 42;
const float: number = 3.14;
const number: number = 3e10;

const message: string = 'TypeScript is UNDEFINED';

const messages: string[] = ['Hi There', 'Bye', 'ayy lmao'];
const numbers: Array<number> = [1, 3, 2, 2, 1, 4]; // Generic Types

// Tuple
const ownInfo: [string, number] = ['Max', 162];

// Any
let something: any = 'Nope, anything';
something = 42;

function sayMyName(name: string) {
    console.log(name);
}

// Never
const throwSomeError = (message: string): never => {
    throw new Error(message)
};
