// 局部作用域
for (let index = 0; index < 10; index++) {
  setTimeout(() => {
    console.log(index);
  }, 1);
}

// 全局作用域
let index = 0;
for (; index < 10; index++) {
  setTimeout(() => {
    console.log(index);
  }, 1);
}
