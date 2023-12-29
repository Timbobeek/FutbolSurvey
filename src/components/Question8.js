import useFormContext from "../hooks/useFormContext"

const Question8 = () => {

    const {data, handleChange} = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <p>What's the favorite jersey you own?</p>
                <div className="flex-col">
                    <input
                        type="text"
                        id="favjersey"
                        name="favjersey"
                        placeholder="2004 Barcelona Puyol Away "
                        //pattern="([A-Z])[\w+.]{1,}"
                        value={data.favjersey}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )

    return content
}
export default Question8