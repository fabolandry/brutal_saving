import Connectwalletbutton from "./components/connectwalletbutton";
import CentreSquare from "./components/centresquare";




function App() {
    return (
            <div className="main-body">
                <div className="header">
                    <p className="title"> Brutal Saving </p>
                    <Connectwalletbutton />
                </div>
                <CentreSquare />
                <div className="footer"></div>
            </div>
            );
}

export default App
