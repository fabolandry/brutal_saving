import React  from 'react';
import Connectwalletbutton from "./components/connectwalletbutton";
import CentreSquare from "./components/centresquare";
import {useState} from 'react';




function App() {

    const [currentAccount, setcurrentAccount] = useState(null);
    const connectWalletHandler = async (event) => {
        event.preventDefault();
        const { ethereum } = window;
    
        if (!ethereum) {
          alert("Please install Metamask!");
        }
    
        try {
          const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
          console.log("Found an account! Address: ", accounts[0]);
          setcurrentAccount(accounts[0]);
          console.log(currentAccount);
        } catch (err) {
          console.log(err)
        }
      }
    return (
            <div className="main-body">
                <div className="header">
                    <p className="title"> Brutal Saving </p>
                    <Connectwalletbutton connectWalletHandler={connectWalletHandler} currentAccount={currentAccount} setcurrentAccount={setcurrentAccount}  />
                </div>
                <CentreSquare currentAccount={currentAccount}/>
                <div className="footer"></div>
            </div>
            );
}

export default App
