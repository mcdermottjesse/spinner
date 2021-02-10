
const cursor = '\r|\r/\r-\r\\\r|\r/\r-\r\\\r|\r/\r-\r\\\r|\r/\r-\r\\\r|\r/\r-\r\\\r|\r/\r-\r\\\r|\r/\r-\r\\'
let time = 0
for (const char of cursor){
  setTimeout(() => {
    process.stdout.write(char)
  }, time += 150);
};


  


