// Import the encryptors functions here.
const { caesarCipher, reverseCipher, symbolCipher } = require('./encryptors')
const CAESER_CODE = 17;
const encodeMessage = (str) => {
    // Use the encryptor functions here.
    let output = caesarCipher(str, CAESER_CODE);
    //console.log(`After caeser: ${output}`);
    output = reverseCipher(output);
    // console.log(`After reverse: ${output}`);
    output = symbolCipher(output);
    //console.log(`After symbol: ${output}`);
    return output;
}

const decodeMessage = (str) => {
    let output = '';
    output = symbolCipher(str);
    output = reverseCipher(output);
    output = caesarCipher(output, -CAESER_CODE);

    return output;
}

// User input / output.

const handleInput = (userInput) => {
    const str = userInput.toString().trim();
    let output;
    if (process.argv[2] === 'encode') {
        output = encodeMessage(str);
    }
    if (process.argv[2] === 'decode') {
        output = decodeMessage(str);
    }

    process.stdout.write(output + '\n');
    process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);