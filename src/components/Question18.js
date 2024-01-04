import useFormContext from "../hooks/useFormContext"

const Question18 = () => {

    const {data, handleChange} = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <p>Best futbol advice you've received?</p>
                <div className="flex-col">
                    <input
                        type="text"
                        id="advc"
                        name="advc"
                        placeholder="Listen to your heart"
                        //pattern="([A-Z])[\w+.]{1,}"
                        value={data.advc}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )

    return content
}
export default Question18