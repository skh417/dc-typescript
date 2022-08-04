{
  /**
   * Javscript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array......
   */

  // number
  const num: number = 112414;

  // string
  const str: string = "string!";

  // boolean
  const bool: boolean = true;

  // undefined 값이 결정되지 않은 상태, 가능한 사용하지 않는 것이 좋다.
  let name: undefined;
  let age: number | undefined;
  function find(): number | undefined {
    if (true) {
      return 1;
    }
  }

  // null 값이 없음, 가능한 사용하지 않는 것이 좋다.
  let role: null;
  let role2: string | null;

  // unknown 알수 없음 , 가능한 사용하지 않는 것이 좋다
  let notSure: unknown = 0;
  notSure = "xxx";
  notSure = false;

  // any 사용하지 않는 것이 좋다.
  let anything: any = 0;
  anything = "hello world";

  // void 함수에서 아무값도 리턴하지 않는 경우에 사용, 변수에는 거의 사용되지 않음
  function find2(): void {
    return;
  }

  // never 함수에서 아무것도 리턴할 수 없는 경우. 보통 throw error의 경우?
  function throwError(errMsg: string): never {
    // error massage => server (log)

    throw new Error(errMsg);
    // while(true){console.log('never ending story~')}
  }

  // object
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ test: "test" });
}
