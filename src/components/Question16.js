import useFormContext from "../hooks/useFormContext"

const Question16 = () => {

    const {data, handleChange} = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <p className="questionTextLong">What's your biggest achievement <br/> in futbol so far?</p>
                <div className="flex-col">
                    <textarea
                        type="text"
                        className="textField"
                        id="achv"
                        name="achv"
                        placeholder="Winning State with Tate High"
                        //pattern="([A-Z])[\w+.]{1,}"
                        value={data.achv}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )

    return content
}
export default Question16