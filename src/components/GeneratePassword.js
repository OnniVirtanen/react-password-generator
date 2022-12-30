import "./GeneratePassword.css";
import { useState } from 'react';

const generatePassword = (options) => {
    // Create a string of all the characters that are allowed
    let characters = '';
    if (options.uppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (options.lowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (options.numbers) characters += '0123456789';
    if (options.symbols) characters += " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    // Generate a random password of the specified length
    if (characters.length !== 0) {
        let password = '';
        for (let i = 0; i < options.length; i++) {
          const index = Math.floor(Math.random() * characters.length);
          password += characters[index];
        }
        return password;  
    }
    else {
        console.log("no options for password");
    }
}


const PasswordOptions = () => {
    const [password, setPassword] = useState('Click right bottom corner to generate a password');

    const [options, setOptions] = useState({
        length: 16,
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true
    });

    const [color, setColors] = useState({
        uppercase: '#90EC65',
        lowercase: '#90EC65',
        numbers: '#90EC65',
        symbols: '#90EC65'
    })

    const toggleOptions = (option) => {
        setOptions(prevOptions => {
            return {
              ...prevOptions,
              [option]: !prevOptions[option]
            };
        });
        setColors(prevColors => {
            return {
              ...prevColors,
              [option]: (prevColors[option] === '#90EC65') ? 'white' : '#90EC65'
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
                        <button style={{ backgroundColor: color.uppercase }} onClick={() => toggleOptions('uppercase')}>
                            <span className="material-symbols-outlined">
                            check
                            </span>
                        </button>
                    </li>
                    <li>
                        <div>Lowercase</div>
                        <button style={{ backgroundColor: color.lowercase }} onClick={() => toggleOptions('lowercase')}>
                            <span className="material-symbols-outlined">
                            check
                            </span>
                        </button>
                    </li>
                    <li>
                        <div>Numbers</div>
                        <button style={{ backgroundColor: color.numbers }} onClick={() => toggleOptions('numbers')}>
                            <span className="material-symbols-outlined">
                            check
                            </span>
                        </button>
                    </li>
                    <li>
                        <div>Symbols</div>
                        <button style={{ backgroundColor: color.symbols }} onClick={() => toggleOptions('symbols')}>
                            <span className="material-symbols-outlined">
                            check
                            </span>
                        </button>
                    </li>
                </ul>
                <div className="second-options">
                    <label className="length-input">
                        Length:
                        <input type="number" value={options.length} onChange={handleLengthChange} />
                    </label>
                    <button onClick={handleClick} className="renew">
                        <span className="material-symbols-outlined">
                        autorenew
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default PasswordOptions;