const GeneratePassword = ({ options }) => {
  // Create a string of all the characters that are allowed
  const characters = [
    options.uppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "",
    options.lowercase ? "abcdefghijklmnopqrstuvwxyz" : "",
    options.numbers ? "0123456789" : "",
    options.symbols ? " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~" : "",
  ].join("");

  // Generate a random password of the specified length
  if (characters.length !== 0) {
    let password = "";
    for (let i = 0; i < options.length; i++) {
      const index = Math.floor(Math.random() * characters.length);
      password += characters[index];
    }
    return password;
  } else {
    alert("Please provide options for the password");
  }
};

export default GeneratePassword;
