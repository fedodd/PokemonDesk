//concat function

type typeConcatFn = (firstStr: string, secondStr: string) => string ;

const concat: typeConcatFn = (firstStr: string, secondStr: string) => {
    return firstStr + secondStr
}

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
