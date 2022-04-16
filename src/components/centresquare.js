import React from 'react';
import web3 from '../web3';
import Brutalsaving from '../abis/Brutalsaving';


function CentreSquare({currentAccount}) {
    async function asyncCall() {
        const contract = new web3.eth.Contract(
            Brutalsaving.abi,
            "0x91aE75daA209e6782f0996527721B9442c658625"
        );
        console.log(contract);
        await contract.methods
            .fund()
            .send({from : currentAccount, value: "1000000000"});
    }
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
                <input type="text"  required/>
            </form>
            <form>
                <label> Payback Date : </label>
                <input className="date-pick" type="datetime-local"  required/>
            </form>
            <button  onClick={asyncCall} className='submitbutton'>Send Transaction</button>   
        </div>
    )
}

export default CentreSquare
