import React, {useState} from 'react';
import web3c from '../web3';
import Brutalsaving from '../abis/Brutalsaving';

//var schedule = require('node-schedule');



function CentreSquare({currentAccount}) {
    const [amount, setAmount] = useState('');
    const [Pdate, setPdate] = useState('');
    const contract = new web3c.eth.Contract(
        Brutalsaving.abi,
        "0xd846f898E3861CeF974217cD31483171e2051A04"
    );
    
    async function asyncCall2() {
        await contract.methods
            .withdraw()
            .send({from : currentAccount});
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
                You create a Smart Contract, 
                That Smart Contract keeps your money 
                from anyone in the world 
                (You included) and pays you back 
                at a set date.
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
