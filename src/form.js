export default function Form() {
    const shoot = () => {
        alert("Submitted The Form!");
    }

    return (
        <div id="Container">
            <form>
                <div className="child">
                    <h1 style={{ textAlign: 'center' }}>Form</h1>
                    <label>First name:<br />
                        <input type="text" required />
                    </label>
                    <br />
                    <label>Last name:<br />
                        <input type="text" required />
                    </label>
                    <br />
                    <br />
                    <label>Select Subject:<br />
                        <select required>
                            <option value="" selected>Select Subject</option>
                            <option value="APL">Advanced Programming Langauge</option>
                            <option value="OE3">Social Media Analytics</option>
                            <option value="OE4">Cyber Security</option>
                        </select>
                    </label>
                    <br />
                    <br />
                    <button
                        className="btnn" onClick={shoot} style={{ display: 'block', margin: '0 auto', width: 'fit-content' }}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}
