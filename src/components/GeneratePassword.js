import "./GeneratePassword.css";
import { useState } from 'react';

const generatePassword = (options) => {
    // Create a string of all the characters that are allowed
    console.log("this is options inside generatePassword", options);
    let characters = '';
    if (options.uppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (options.lowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (options.numbers) characters += '0123456789';
    if (options.symbols) characters += " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    console.log("this is characters inside generatePassword", characters);

    // Generate a random password of the specified length
    if (characters.length !== 0) {
        let password = '';
        for (let i = 0; i < options.length; i++) {
          const index = Math.floor(Math.random() * characters.length);
          password += characters[index];
        }
    
        console.log('this is password:', password);
        return password;  
    }
    else {
        console.log("no options for password");
    }
}


const PasswordOptions = () => {
    const [password, setPassword] = useState('your password here');

    const [options, setOptions] = useState({
        length: 16,
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true
    });

    const toggleOptions = (option) => {
        setOptions(prevOptions => {
            return {
              ...prevOptions,
              [option]: !prevOptions[option]
            };
        });
    }

    const handleLengthChange = event => {
        setOptions({
          ...options,
          length: event.target.value
        });
    };

    const handleClick = () => {
        const newPassword = generatePassword(options);
        setPassword(newPassword);
    }

    return (
        <>  
            <h1>Password Generator</h1>
            <div className="passwd-ready">{ password }</div>
            <div className="passwd-options">
                <ul>
                    <li>
                        <div>Uppercase</div>
                        <button onClick={() => toggleOptions('uppercase')}>x</button>
                    </li>
                    <li>
                        <div>Lowercase</div>
                        <button onClick={() => toggleOptions('lowercase')}>x</button>
                    </li>
                    <li>
                        <div>Numbers</div>
                        <button onClick={() => toggleOptions('numbers')}>x</button>
                    </li>
                    <li>
                        <div>Symbols</div>
                        <button onClick={() => toggleOptions('symbols')}>x</button>
                    </li>
                    <li>
                        <div>Generate Password</div>
                        <button onClick={handleClick}>x</button>
                    </li>
                    <li>
                        <label className="length-input">
                            Length:
                            <input type="number" value={options.length} onChange={handleLengthChange} />
                        </label>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default PasswordOptions;