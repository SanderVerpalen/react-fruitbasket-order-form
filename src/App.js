import React, {useState} from 'react';
import './App.css';
import Button from "./components/Button/Button";
import strawberry from './assets/Strawberry.png'
import banana from './assets/Banana.png'
import apples from './assets/Apple.png'
import kiwis from './assets/Kiwi.png'
import logo from './assets/screenshot-logo.png'
import Card from "./components/Card/Card";
import FruitCounter from "./components/FruitCounter/FruitCounter"
import InputField from "./components/InputField/InputField";


function App() {

    const [state, setState] = useState({
        strawberryCounter: 0,
        bananaCounter: 0,
        appleCounter: 0,
        kiwiCounter: 0,
        formFirstName: '',
        formLastName: '',
        formAge: 0,
        formPostalCode: '',
        formFrequency: "Iedere week",
        formTime: "Overdag",
        formComments: '',
        checkBox: false
    })

    const {
        strawberryCounter,
        bananaCounter,
        appleCounter,
        kiwiCounter,
        formFirstName,
        formLastName,
        formAge,
        formPostalCode,
        formFrequency,
        formTime,
        formComments,
        checkBox
    } = state;


    function submitInfo() {

        console.log("Strawberries: " + strawberryCounter);
        console.log("Bananas: " + bananaCounter);
        console.log("Apples: " + appleCounter);
        console.log("Kiwis: " + kiwiCounter);
        console.log(formFirstName);
        console.log(formLastName);
        console.log(formAge);
        console.log(formPostalCode);
        console.log(formFrequency);
        console.log(formTime);
        console.log(formComments)
        console.log(checkBox);
        resetCounters();

    }

    function resetCounters() {
        setState(prevState => {
            return {
                ...prevState,
                strawberryCounter: prevState.strawberryCounter - strawberryCounter,
                bananaCounter: prevState.bananaCounter - bananaCounter,
                appleCounter: prevState.appleCounter - appleCounter,
                kiwiCounter: prevState.kiwiCounter - kiwiCounter
            }
        })
    }

    return (
        <>
            <img src={logo} alt="logo-pic"/>
            <div>
                <Card
                    imgClassName="card-pic"
                    img={strawberry}
                    alt="strawberry-pic"
                    head="strawberries"
                >
                    <FruitCounter
                        className="fruit-counter"
                        buttonClassName="counterButton"
                        buttonType="button"
                        clickHandlerFunctionMinus={() => {
                            if (strawberryCounter > 0) setState(prevState => {
                                return {
                                    ...prevState,
                                    strawberryCounter: prevState.strawberryCounter - 1
                                }
                            })
                        }}
                        clickHandlerFunctionPlus={() =>
                            setState(prevState => {
                                return {
                                    ...prevState,
                                    strawberryCounter: prevState.strawberryCounter + 1
                                }
                            })}
                        counter={strawberryCounter}
                    ></FruitCounter>
                </Card>
                <Card
                    imgClassName="card-pic"
                    img={banana}
                    alt="banana-pic"
                    head="bananas"
                >
                    <FruitCounter
                        className="fruit-counter"
                        buttonClassName="counterButton"
                        buttonType="button"
                        clickHandlerFunctionMinus={() => {
                            if (bananaCounter > 0) setState(prevState => {
                                return {
                                    ...prevState,
                                    bananaCounter: prevState.bananaCounter - 1
                                }
                            })
                        }}
                        clickHandlerFunctionPlus={() =>
                            setState(prevState => {
                                return {
                                    ...prevState,
                                    bananaCounter: prevState.bananaCounter + 1
                                }
                            })}
                        counter={bananaCounter}
                    ></FruitCounter>
                </Card>
                <Card
                    imgClassName="card-pic"
                    img={apples}
                    alt="apple-pic"
                    head="appels"
                >
                    <FruitCounter
                        className="fruit-counter"
                        buttonClassName="counterButton"
                        buttonType="button"
                        clickHandlerFunctionMinus={() => {
                            if (appleCounter > 0) setState(prevState => {
                                return {
                                    ...prevState,
                                    appleCounter: prevState.appleCounter - 1
                                }
                            })
                        }}
                        clickHandlerFunctionPlus={() =>
                            setState(prevState => {
                                return {
                                    ...prevState,
                                    appleCounter: prevState.appleCounter + 1
                                }
                            })}
                        counter={appleCounter}
                    ></FruitCounter>
                </Card>
                <Card
                    imgClassName="card-pic"
                    img={kiwis}
                    alt="kiwi-pic"
                    head="kiwis"
                >
                    <FruitCounter
                        className="fruit-counter"
                        buttonClassName="counterButton"
                        buttonType="button"
                        clickHandlerFunctionMinus={() => {
                            if (kiwiCounter > 0) setState(prevState => {
                                return {
                                    ...prevState,
                                    kiwiCounter: prevState.kiwiCounter - 1
                                }
                            })
                        }}
                        clickHandlerFunctionPlus={() =>
                            setState(prevState => {
                                return {
                                    ...prevState,
                                    kiwiCounter: prevState.kiwiCounter + 1
                                }
                            })}
                        counter={kiwiCounter}
                    ></FruitCounter>
                </Card>

                <Button
                    className="reset-button"
                    children="Reset"
                    type="button"
                    clickHandlerFunction={() => resetCounters()}
                >
                </Button>
                <form onSubmit={submitInfo}>
                    <fieldset>
                        <legend>Gegevens</legend>
                        <InputField
                            name="firstName"
                            label="Voornaam"
                            type="text"
                            changeHandlerFunction={(e) =>
                                setState(prevState => {
                                    return {
                                        ...prevState,
                                        formFirstName: e.target.value
                                    }
                                })
                            }
                        />
                        <InputField
                            name="lastName"
                            label="Achternaam"
                            type="text"
                            changeHandlerFunction={(e) =>
                                setState(prevState => {
                                    return {
                                        ...prevState,
                                        formLastName: e.target.value
                                    }
                                })
                            }
                        />
                        <InputField
                            name="age"
                            label="Leeftijd"
                            type="number"
                            value={formAge}
                            changeHandlerFunction={(e) =>
                                setState(prevState => {
                                    return {
                                        ...prevState,
                                        formAge: e.target.value
                                    }
                                })
                            }
                        />
                        <InputField
                            name="postalCode"
                            label="Postcode"
                            type="text"
                            changeHandlerFunction={(e) =>
                                setState(prevState => {
                                    return {
                                        ...prevState,
                                        formPostalCode: e.target.value
                                    }
                                })
                            }
                        />
                        <div className="selectorBox">
                            <label htmlFor="frequency">Bezorgfrequentie</label>
                            <select name="frequency" id="frequency"
                                    onChange={(e) =>
                                        setState(prevState => {
                                            return {
                                                ...prevState,
                                                formFrequency: e.target.value
                                            }
                                        })
                                    }
                            >
                                <option value="Iedere week">Iedere week</option>
                                <option value="Om de week">Om de week</option>
                                <option value="Iedere maand">Iedere maand</option>
                            </select>
                        </div>
                        <div className="radio">
                            <label htmlFor="overdag">
                                <input
                                    type="radio" value="Overdag" id="overdag"
                                    onClick={() =>
                                        setState(prevState => {
                                            return {
                                                ...prevState,
                                                formTime: "Overdag"
                                            }
                                        })
                                    }
                                    name="timeOfDay"
                                    defaultChecked={true}
                                />
                                Overdag
                            </label>
                            <label htmlFor="savonds">
                                <input
                                    type="radio" value="'s avonds" id="savonds"
                                    onClick={(e) =>
                                        setState(prevState => {
                                            return {
                                                ...prevState,
                                                formTime: "'s avonds"}
                                        })
                                    }
                                    name="timeOfDay"
                                />
                                's avonds
                            </label>
                        </div>
                        <div>
                            <label htmlFor="comments">Opmerkingen
                                <textarea name="" id="" cols="40" rows="4"
                                    onChange={(e) =>
                                        setState(prevState => {
                                            return {
                                                ...prevState,
                                                formComments: e.target.value}
                                        })
                                    }
                                >
                            </textarea>
                            </label>
                        </div>
                        <label htmlFor="checkbox">
                            <input type="checkbox" name="voorwaarden" onChange={(e) =>
                                setState(prevState => {
                                    return {
                                        ...prevState,
                                        checkBox: !checkBox}
                                })
                            }
                            />
                            Ik ga akkoord met de voorwaarden
                        </label>

                    </fieldset>
                    <Button
                        children="verzenden"
                        className="send-button"
                        type="button"
                        clickHandlerFunction={() => submitInfo()}
                    ></Button>
                </form>
            </div>
        </>
    );
}

export default App;
