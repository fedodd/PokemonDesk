//concat function

type typeConcatFn = (firstStr: string, secondStr: string) => string ;

const concat: typeConcatFn = (firstStr: string, secondStr: string) => firstStr + secondStr;

let result = concat('Hello ', 'World');

//interface

interface homeTask {
    howIDoIt: string,
	simeArray: (number | string)[]
	withData: object[],
}

const MyHometask: homeTask  = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

// Generic

interface MyArray<T> {
	[N: number]: T;
    map<U>(fn: (el: T) => U): U[];
	reduce<U>(fn: (acc:U, el:T) => U): U;
}

let arr: number[] = [1,2,3];

console.log(arr.reduce((acc, i) => i + acc));