let hello = 'Hello World';
alert('Hello' + 'World');
同じ
let str1 = 'Hello';
let str2 = 'World!!';
alert(str1 + str2);



//整数を代入
//let int1 = 1;

//負数を代入
//let int2 = -10;

//小数点を代入する
//let float1 = 3.14;

//文字列を代入する
//let str1 = 'JavaScriptを覚えよう';


//四足演算


//足し算
//alert(4 + 3);

//引き算
//alert(8 - 5);

//掛け算
//alert(2 * 6);

//割り算
//alert(10 / 2);



//条件分岐

//条件１を」満たすときは処理１を実行
//if(条件１){
  //処理１
// }


//一つの条件式で処理を２つに分けるとき
//if(条件１){
  //処理１
  //}else{
    //処理２
  // }

  //二つの条件式で処理を分ける場合
  //if(条件１){
    //処理１
    //}else if(条件２){
      //処理２
      //}else{
        //処理３
      // }
   


let orange = 100;
let apple = 120;

if(orange<apple){
  alert('みかんの値段がリンゴより安い');
}else if(orange == apple){
  alert('みかんとリンゴが同じ値段');
}else{
  alert('みかんの値段がリンゴより高い');
}



//while文
//引数の条件がtrueの間,波括弧内部の処理が繰り返される。
//while(条件){
  //処理
//}

let max = 100;
let num = 1;
let count = 0;

while(num<max){
  num =num * 2;
  count = count + 1;
}

alert('2をかけ続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


//do...while文
//do{
 //最低一回は行われる処理
//}while(条件式);

//for文
//for(初期値;条件式;増減値){
  //繰り返し処理
//}

let i;
//変数iを宣言
let num = 0;
//変数num」を宣言し、初期値を「0」に設定
for(i = 1;i < 11;i ++){
  //変数iの初期値を「1」に設定,変数iが「11」未満のときは変数iに1を足す   （「i++」は「i = i+1」と同じ） 
  num = num + i;
  //変数numに「num+i」を代入
}

alert('1から10まで足し算した結果は' + num + 'です');