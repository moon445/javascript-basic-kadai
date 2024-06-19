// 配列の宣言と値の代入を行う
const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

// 配列の値を出力する
console.log(holidays);


console.log('★for文');
// 配列の要素数分繰り返す
for (let i = 0; i < holidays.length; i++) {

  // 配列の要素を出力する
  console.log(holidays[i]);

}

i = 0;

console.log('★while文');
// 配列の要素数分繰り返す
while (i < holidays.length) {

  // 配列の要素を出力する
  console.log(holidays[i]);

  // インクリメント
  i++ ;

}


