function fruitProcessor(apples, oranges) {
  //apples, oranges只是參數名稱，不是真的表示蘋果和橘子
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

fruitProcessor(3, 5); //result will be 3,5
console.log(fruitProcessor(3, 5)); //result will be 3,5 and Juice with 3 apples and 5 oranges.

/* why we need to use return in function
below this case, we don't use the return in our function*/
console.log(
  "-------This is a fuction without any console.log or return--------"
);
function logger() {
  const name = "My name is Jonas";
}
logger();
logger(1);
logger("apples");

//Hence, when we call logger() many times, this function will not display any value on our screen
//that means we need to use console.log or alert... to call it to display like below statements

console.log("-------This is a fuction with console.log--------");
function logger1() {
  const name = "My name is Jonas";
  console.log(name);
}
logger1(1);
logger1("b");

console.log("-------This is a fuction with return--------");

//Or we can use 'return' which means kick out the value on screen
function logger2() {
  const name = "My name is Jonas";
  return name;
}
//can write any types like number, string....to call the function
console.log(logger2(50));
console.log(logger2("this is a pig"));
