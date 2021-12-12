let user = [['田中一郎',30,'読書']];


//配列の中身を全て出力
for(let i=0; i<user.length; i++){
  console.log('名前:' + user[i][0]);
  console.log('年齢:' + user[i][1]);
  console.log('趣味:' + user[i][2]);
  console.log('--------------------');
}


//新規ユーザーを追加
user.push(['木村涼子',18,'ウォーキング']);

for(let i=0; i<user.length; i++){
  console.log('名前:' + user[i][0]);
  console.log('年齢:' + user[i][1]);
  console.log('趣味:' + user[i][2]);
  console.log('--------------------');
}




//
//
// 配列の中身を表示する関数 output()を作成したパターン
//
//


let user = [['田中一郎',30,'東京都']];

output(user);

//新規ユーザーを追加
user.push ( ['伊藤花子',23,'音楽鑑賞']);

output(user);

//新規ユーザーを追加
user.push(['木村涼子',18,'ウォーキング']);

output(user);

//配列の中身を全て出力する関数を作成

function output (array){
  for(let i=0; i<array.length; i++){
    console.log('名前' + user[i][0]);
    console.log('年齢' + user[i][1]);
    console.log('趣味' + user[i][2]);
    console.log('------------------');
  }
}




//
//
//関数宣言
//
//

function myFunc(){

  //処理を記述

}



//
//
//関数式
//
//
const myFunc = function(){

  //処理を記述

}


//
//
//アロー関数　(特別な場合を除いて関数式はアロー関数を使う)
//
//
const myFunc = () =>{

  //処理を記述

}


//
//
//関数の実行方法
//
////関数宣言は関数定義前にも実行できる

//関数宣言の場合
function myFunc1(){
  console.log('これは関数宣言です');
}
myFunc1(); //関数の実行


//関数式の場合
//
////関数式は関数定義後のみ実行される

const myFunc2 = () => {
  console.log('これは関数式です');
}
myFunc2(); //関数の実行


//関数宣言の場合
//同じ関数名のため、2つ目の関数宣言によって内容が上書きされている
function myFunc(){
  console.log('これは関数宣言です');
}

function myFunc(){
  console.log('これは2つ目の関数宣言です');
}

myFunc();

//関数式の場合
//関数式の場合は、既に定義されているものの場合はエラー文を吐き出す
const myFunc = () => {
  console.log('これは関数式です')
}

const myFunc = () =>{ 
  console.log('これは2つ目の関数式です')
}

myFunc();
