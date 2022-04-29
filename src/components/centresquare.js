import React, {useState} from 'react';
import Web3 from 'web3';
import Brutalsaving from '../abis/Brutalsaving';

const web3 = new Web3(window.ethereum);

function CentreSquare({currentAccount}) {

    const [amount, setAmount] = useState('');
    const [Pdate, setPdate] = useState('');
    const contract = new web3.eth.Contract(
        Brutalsaving.abi,
        "0xF39eEdA921Dd5FD698352b14f0cCDD2f0eBba057"
    );
    
    async function asyncCall2() {
        const withdrawMsg = await contract.methods
            .withdraw()
            .send({
                from : currentAccount,
                gas: '100000000'
            });
        console.log(withdrawMsg);
    }

    async function asyncCall() {
        //const TPdate = new Date(Pdate);
        const unlockDate = parseInt((new Date(Pdate).getTime() / 1000).toFixed(0))
        console.log(unlockDate);
        const weiAmount = amount * 1000000000000000000;
        //schedule.scheduleJob(TPdate, asyncCall2);
        console.log('Widthdrawal scheduled on the ', Pdate);
        await contract.methods
            .fund(unlockDate)
            .send({from : currentAccount, value: weiAmount});
    };


    return (
        <div className="mainsquare">
            <p className="description">
                This smart contract save your money until a certain date.
                You can use different accounts and different dates.
                The last Payback date sets is the one kept in the contract. 
            </p>
            <form>
                <label> Amount (in Eth) : </label>
                <input 
                    type="text" 
                    value = {amount}
                    onChange={event => setAmount(event.target.value)} 
                    required
                    />
            </form>
            <form>
                <label> Payback Date : </label>
                <input 
                    className="date-pick" 
                    type="datetime-local"
                    value = {Pdate}
                    onChange={event => setPdate(event.target.value)}   
                    required
                    />
            </form>
            <div className="buttondiv">
                <button  onClick={asyncCall} className='submitbutton'>Send</button> 
                <button onClick={asyncCall2} className='submitbutton'>Withdraw</button>
            </div>  
        </div>
    )
}

export default CentreSquare;
