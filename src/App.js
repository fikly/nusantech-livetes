import React, {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';

function App() {

    const [number1, setNumber1] = useState([])
    const [number2, setNumber2] = useState([])
    const [number3, setNumber3] = useState('')

    const handleGetNumber1 = value => {
        let response = []

        for(let i = 1; i <= parseInt(value); i++){
            if(i % 3 === 0 && i % 5 !== 0){
                response.push(i +'. fish')
            }else if(i % 5 === 0 && i % 3 !== 0){
                response.push(i+ '. bash')
            }else if(i % 3 === 0 && i % 5 === 0){
                response.push(i+'. fish bash')
            }else{
                response.push(i+'.')
            }
        }
        
        setNumber1(response)
    }
    const handleGetNumber2 = (value) => {
        let split = value.split(",")
        let split2 = value.split(",")

        let arrUp = split
        let arrDown = split2

        var doneUp = false;
        var doneDown = false;

        while (!doneUp) {
            doneUp = true;
            for (let i = 1; i < arrUp.length; i += 1) {
                if (parseInt(arrUp[i - 1]) > parseInt(arrUp[i])) {
                    doneUp = false;
                    let tmp = arrUp[i - 1];
                    arrUp[i - 1] = arrUp[i];
                    arrUp[i] = tmp;
                }
            }
        }

        while (!doneDown) {
            doneDown = true;
            for (let i = 1; i < arrDown.length; i += 1) {
                if (parseInt(arrDown[i - 1]) < parseInt(arrDown[i])) {
                    doneDown = false;
                    let tmp = arrDown[i - 1];
                    arrDown[i - 1] = arrDown[i];
                    arrDown[i] = tmp;
                }
            }
        }

        setNumber2({
            'up' : arrUp,
            'down' : arrDown
        })
    }

    const handleGetNumber3 = value => {
        const arr = value.split("")
        let newValue = ""
        for(let i = (value.length - 1); i >= 0; i--){
            newValue += arr[i]
        }

        setNumber3((value === newValue ? true : false))
       
    }

    console.log('soal no 1',number1)
    console.log('soal no 2',number2)
    console.log('soal no 3',number3)

    return (
        <div className="App">
            <h5>Soal No 1.</h5>
            <input type="text" onBlur={(e) => handleGetNumber1(e.target.value)} />
            <h5>Soal No 2.</h5>
            <input type="text" onBlur={(e) => handleGetNumber2(e.target.value)} />
            <h5>Soal No 3.</h5>
            <input type="text" onBlur={(e) => handleGetNumber3(e.target.value)} />
        </div>
    );
}

export default App;
