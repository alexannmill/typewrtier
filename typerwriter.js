const sentence = "hello there from lighthouse labs";

let interval =0 


  for (const char of sentence) {
console.log(`setting timer to print ${char} in ${interval} ms`)
    setTimeout(()  => {
      process.stdout.write(char)
    }, interval);
    interval += 100
  }

  setTimeout(()  => {
    process.stdout.write("\n")
  }, interval);

  // process.stdout.write("\n")


// const delayLetters = () => {
//   for (const char of sentence) {
//     setTimeout(()  => {
//       process.stdout.write(char)
//     }, 50);
//   }
// };

// delayLetters(setTimeout(()  => {
//   process.stdout.write(char)
// }, 50);
// );
//exit loop delay and re enter into loop 
//call back need to have time out 