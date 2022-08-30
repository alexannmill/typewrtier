const sentence = "hello there from lighthouse labs";

let interval = 0;
for (const char of sentence) {
  console.log(`setting timer to print ${char} in ${interval} ms`);
  setTimeout(() => {
    process.stdout.write(char);
  }, interval);
  interval += 100;
}

setTimeout(() => {
  process.stdout.write("\n");
}, interval);
