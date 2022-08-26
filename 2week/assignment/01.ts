// 1. 타입스크립트가 다음을 타입추론 할 수 있게 바꿔주세요.
const person = {
  name: 'Joe',
  age: 10,
  country: 'ko',
  sex: 'male',
};


type arr1 = ['a', 'b', 'c']
type arr2 = [1, 2, 3]

// type Arr<T extends any[]> = T;
// type First<T> = T extends Arr<infer A> ? A : any;

// type First<T extends unknown[]> = T[0] // 가능
// never[] <-- 진정한 빈 배열
// type First<T extends unknown[]> = T extends never[] ? never : T[0]; 
type First<T extends unknown[]> = T extends [infer F, ...unknown[]] ? F : never 

type head1 = First<arr1>;
type head2 = First<arr2>;

type Last<T extends unknown[]> = T extends [...unknown[], infer L] ? L : never 

type tail1 = Last<arr1>;
type tail2 = Last<arr2>;




type Fn<A extends number[]> = (...args:A) => any;
type FnArgs<T> = T extends Fn<infer A> ? A : any;

function test(name: number) {
  // 값 공간
  return 3
}
type TestFn = FnArgs<typeof test>;


type StrFn = (input: string) => string;
const getSHA: StrFn = (input: string) => {
  return input;
};

type PromiseFn<T> = T extends (...args: infer A) => infer R ? (...args: A) => Promise<R> : T;
const getSHAAsync: PromiseFn<StrFn> = (input: string) =>{
  return new Promise((res) => input);
}
