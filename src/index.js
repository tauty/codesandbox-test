/**
 * const, let等の変数宣言
 */
// var v1 = "var変数";
// console.log(v1); // var変数

// // var変数の上書き可能
// v1 = "chanko";
// console.log(v1); // chanko

// // var変数は再定義可能
// var v1 = "hanako";
// console.log(v1); // hanako

// let v1 = "let変数";
// console.log(v1); // let変数

// // 上書き可能
// v1 = "chanko";
// console.log(v1); // chanko

// // 再宣言は不可能
// let v1 = "ppp"; // -> Syntax Error

// const v1 = "const変数";
// console.log(v1);

// // const変数は上書き不可
// // v1 = "chanko"; // -> Type Error

// // const変数は再宣言不可
// const v1 = "chanko"; // -> SyntaxError

// constで定義したオブジェクトはプロパティの変更・追加が可能
// const v1 = {
//   name: "chanko",
//   age: 7
// };

// v1.name = "ちゃんこ";
// v1.address = "Saitama";
// console.log(v1);

// constで定義した配列は要素の変更・追加が可能
// const v1 = ["dog", "cat"];
// v1[0] = "bird";
// v1.push("monkey");
// console.log(v1);

/**
 * テンプレート文字列
 */
// const name = "ちゃんこ";
// const age = 7;
// console.log(`僕の名前は${name}でち。${age}才でち。`);

/**
 * アロー関数
 */
// const f1 = (s) => "[" + s + "]";
// console.log(f1("おほほ")); // [おほほ]

// const f2 = (n1, n2) => n1 + n2;
// console.log(f2(3, 5)); // 8

/**
 * 分割代入
 */
// const person = {
//   name: "ちゃんこ",
//   age: 7
// };
// const { name, age } = person;
// console.log(`名前は${name}でち。${age}才でち。`); // 名前はちゃんこでち。7才でち。

// const a1 = ["ゆずんこ", 12];
// const [name2, age2] = a1;
// console.log(`名前は${name2}でち。${age2}才でち。`); // 名前はゆずんこでち。12才でち。

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "World") => console.log(`Hello, ${name}!`);
// sayHello("Chanko"); // Hello, Chanko!
// sayHello(); // Hello, World!

/**
 * スプレッド構文 ...
 */
// // 配列の展開
// const arr1 = [5, 8];
// console.log(...arr1); // 5 8

// const sum = (n1, n2) => console.log(n1 + n2);
// sum(...arr1); // 13

// // 纏める
// const arr2 = [1, 2, 3, 4, 5];
// const [n1, n2, ...arr3] = arr2;
// console.log(n1); // 1
// console.log(n2); // 2
// console.log(arr3); // [3, 4, 5]

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6); // [10, 20]
// const arr7 = [...arr4, ...arr5];
// console.log(arr7); // [10, 20, 30 , 40]

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["Tanaka", "Yamada", "Uchy"];
// nameArr.forEach((name, i) => console.log(`${i + 1}: ${name}`)); // 1: Tanake 2: Yamada 3: Uchy
// nameArr.map((name, i) => console.log(`${i + 1}: ${name}`)); // 1: Tanake 2: Yamada 3: Uchy
// console.log(nameArr.map((name) => "[" + name + "]")); // ["[Tanaka]", "[Yamada]", "[Uchy]"]

// const numArr = [1, 2, 3, 4, 5, 6];
// console.log(numArr.filter((n) => n % 2 === 0).reduce((pre, cur) => pre + cur)); // 12 (2 + 4 + 6)

/**
 * 三項演算子
 */
// const format = (e) => typeof e === 'number' ? e.toLocaleString() : e;
// console.log(format(100000)); // 100,000
// console.log(format("100000")); // 100000
