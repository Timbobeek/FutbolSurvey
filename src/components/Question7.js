import useFormContext from "../hooks/useFormContext"

const Question7 = () => {

    const {data, handleChange} = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <p>What's your favorite league?</p>
                <div className="flex-col">
                    <input
                        type="text"
                        id="favleague"
                        name="favleague"
                        placeholder="MLS"
                        //pattern="([A-Z])[\w+.]{1,}"
                        value={data.favleague}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )

    return content
}
export default Question7