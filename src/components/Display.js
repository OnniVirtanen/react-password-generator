const Display = ({password, color, toggleOptions, options, handleLengthChange, handleClick}) => {
  return (
    <>
      <h1>Password Generator</h1>
      <div className="passwd-ready">{password}</div>
      <div className="passwd-options">
        <ul>
          <li>
            <div>Uppercase</div>
            <button
              style={{ backgroundColor: color.uppercase }}
              onClick={() => toggleOptions("uppercase")}
            >
              <span className="material-symbols-outlined">check</span>
            </button>
          </li>
          <li>
            <div>Lowercase</div>
            <button
              style={{ backgroundColor: color.lowercase }}
              onClick={() => toggleOptions("lowercase")}
            >
              <span className="material-symbols-outlined">check</span>
            </button>
          </li>
          <li>
            <div>Numbers</div>
            <button
              style={{ backgroundColor: color.numbers }}
              onClick={() => toggleOptions("numbers")}
            >
              <span className="material-symbols-outlined">check</span>
            </button>
          </li>
          <li>
            <div>Symbols</div>
            <button
              style={{ backgroundColor: color.symbols }}
              onClick={() => toggleOptions("symbols")}
            >
              <span className="material-symbols-outlined">check</span>
            </button>
          </li>
        </ul>
        <div className="second-options">
          <label className="length-input">
            Length:
            <input
              type="number"
              value={options.length}
              onChange={handleLengthChange}
            />
          </label>
          <button onClick={handleClick} className="renew">
            <span className="material-symbols-outlined">autorenew</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Display;