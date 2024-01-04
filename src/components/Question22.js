import useFormContext from "../hooks/useFormContext"

const Question22 = () => {

    const {data, handleChange} = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <p>Best futbol compliment ever received?</p>
                <div className="flex-col">
                    <input
                        type="text"
                        id="love"
                        name="love"
                        placeholder="Your touch is magic"
                        //pattern="([A-Z])[\w+.]{1,}"
                        value={data.love}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )

    return content
}
export default Question22