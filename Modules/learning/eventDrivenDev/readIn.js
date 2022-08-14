process.stdout.write("Hello! Please enter something... And type quit, to exit program. ");

const interpret = (userInput) => {
  const input = userInput.toString().trim();
  if (input == "quit") {
    process.exit();
  }
  console.log(`Thank you for saying: ${input}`);
};

process.stdin.on("data", interpret);
