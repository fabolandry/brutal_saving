import {useState} from 'react';

const Connectwalletbutton = () => {
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
          <div>
              <button onClick={connectWalletHandler} className='connectwalletbutton'>{currentAccount
                  ? `${currentAccount.substring(0, 4)}...${currentAccount.substring(38, 41)}`
                  : 'Connect Wallet'}</button>
          </div>
          )
}

export default Connectwalletbutton
