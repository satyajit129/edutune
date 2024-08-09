import Answer from "../Answer";
import Miniplayer from "../Miniplayer";
import Progressbar from "../Progressbar";

export default function Quiz() {
    return (
        <>
            <h1 style={{ color: 'white' }}>Pick three of your favorite Star Wars Flims</h1>
            <h4 style={{ color: 'white' }}>Question can have multiple answers</h4>

            <Answer/>
            <Progressbar/>
            <Miniplayer/>
        </>
    )
}