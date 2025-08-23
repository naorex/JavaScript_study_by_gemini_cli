// 問題1: `let` を使って `firstName` という名前の変数を宣言し、あなたの名前（文字列）を代入してください。
let firstName = 'naorex';

// 問題2: `const` を使って `lastName` という名前の定数を宣言し、あなたの苗字（文字列）を代入してください。
const lastName = 'mintowax';

// 問題3: `firstName` と `lastName` を連結し、間にスペースを入れて `fullName` という名前の新しい変数に代入してください。
let fullName = firstName + ' ' + lastName;

// 問題4: テンプレートリテラルを使って "My name is [fullName]." という文字列を作成し、`introduction` という名前の新しい変数に代入してください。 `[fullName]` の部分には、問題3で作成した `fullName` 変数の値を埋め込んでください。
let introduction = `My name is ${fullName}.`;

// 問題5: `fullName` の文字数を `nameLength` という名前の新しい変数に代入してください。
let nameLength = fullName.length;

// 問題6: `firstName` の最初の文字を `firstInitial` という名前の新しい変数に代入してください。
let firstInitial = firstName[0];

// 生成した変数をエクスポートします
export { firstName, lastName, fullName, introduction, nameLength, firstInitial };
