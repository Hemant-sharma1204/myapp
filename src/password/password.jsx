import "./password.css"


import { useState , useCallback , useEffect } from 'react'

function PasswordApp() {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(12);
    const [number, setNumber] = useState(false);
    const [symbol, setSymbol] = useState(false);

    // Use useCallback to prevent unnecessary re-creations of the function
    const passwordGenerator = useCallback(() => {
      let pass = "";
      let passVal = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if (number) passVal += "1234567890";
      if (symbol) passVal += "!@#$%^&*():";

      for (let i = 0; i < length; i++) {
        let randomVal = Math.floor(Math.random() * passVal.length);
        pass += passVal[randomVal];
      }
      setPassword(pass);
    }, [number, symbol, length]);


    // Call passwordGenerator only when the function changes
    useEffect(() => {
      passwordGenerator();
    }, [number , symbol , length]);

  return (

    <div class="container">
    <h1 class="title">🔐 Password Generator</h1>

    <div class="input-group">
        <input type="text" id="password" value={password} class="password-input" placeholder="🔒 Your Password" readonly/>
    </div>

    <div class="controls">
        <div class="control-item">
            <label for="lengthRange">📏 Length: <span id="lengthValue">{length}</span></label>
            <input type="range" id="lengthRange" min="6" max="100" value="12" onChange={(e) => {setLength(parseInt( e.target.value))}} />
        </div>

        <div class="control-item">
            <input type="checkbox" id="numberInput" onChange={() => setNumber((prev) =>!prev

            ) 
            }/>
            <label for="numberInput">🔢 Include Numbers</label>
        </div>

        <div class="control-item">
            <input type="checkbox" id="characterInput" onChange={() => setSymbol((prev) =>  !prev) }/>
            <label for="characterInput">🔠 Include Symbols</label>
        </div>
    </div>
</div>

  )
}

export default PasswordApp









