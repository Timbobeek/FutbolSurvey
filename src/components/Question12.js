import useFormContext from "../hooks/useFormContext"

const Question12 = () => {

    const {data, handleChange} = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <p className="questionText">What's your worst futbol memory as a player?</p>
                <div className="flex-col">
                    <textarea
                        type="text"
                        className="textField"
                        id="wrsmemplr"
                        name="wrsmemplr"
                        placeholder="Breaking my leg in 2003"
                        //pattern="([A-Z])[\w+.]{1,}"
                        value={data.wrsmemplr}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )

    return content
}
export default Question12