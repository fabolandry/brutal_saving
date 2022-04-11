

function CentreSquare() {

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
            <button className='submitbutton'>Send Transaction</button>   
        </div>
    )
}

export default CentreSquare
