{
  // Array
  const fruits: string[] = ["Apple", "Banana"];
  const freshFruits: Array<string> = ["Apple", "Banana"];

  function printArray(fruit: readonly string[]) {
    // readonly는 stirng[] 형태로는 가능하지만
    // Array<stirng>은 아직 불가능함
  }

  // Tuple => interface, type alias, class
  // Tuple 다른 타입을 가진..배열
  let student: [string, number];
  student = ["James", 12039];
  // 인덱스로 불러오는 방식은 해당 인덱스의 값이 무엇인지 예측하기 어렵기 때문에 좋지않다.
  student[0];
  student[1];
  // 비구조화할당을 사용
  const [name, age] = student;
}
