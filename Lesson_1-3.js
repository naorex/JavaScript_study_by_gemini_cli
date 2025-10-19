// 問題1: `let` を使って `isTrue` という名前の変数を宣言し、真偽値 `true` を代入してください。
let isTrue = true;

// 問題2: `const` を使って `isFalse` という名前の定数を宣言し、真偽値 `false` を代入してください。
const isFalse = false;

// 問題3: `>` 演算子を使って、数値 `10` が `5` より大きいかどうかを判定し、結果を `isGreater` という名前の新しい変数に代入してください。
let isGreater = 10 > 5;

// 問題4: `===` 演算子を使って、`isTrue` が `true` と厳密に等しいかどうかを判定し、結果を `isEqual` という名前の新しい変数に代入してください。
let isEqual = isTrue === true;

// 問題5: `if` 文を使って、`isGreater` が `true` の場合に `result1` という変数を宣言し、文字列 "Greater" を代入してください。
function isGreater_(isGreater) {
  let res;
  if (isGreater === true) {
    res = 'Greater';
  }
  return res;
}
let result1 = isGreater_(10 > 5);

// 問題6: `let` を使って `age` という変数を宣言し、数値 `20` を代入してください。その後、`if...else` 文を使って、`age` が `18` 以上の場合に `result2` という変数を宣言して "Adult" を代入し、そうでない場合には "Minor" を代入してください。
let age = 20;
function isGreater_2(age) {
  let res;
  if (age >= 18) {
    res = 'Adult';
  } else {
    res = 'Minor';
  }
  return res;
}
let result2 = isGreater_2(age);

// 生成した変数をエクスポートします
export { isTrue, isFalse, isGreater, isEqual, result1, age, result2 };
