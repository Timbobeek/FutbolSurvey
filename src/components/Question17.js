import useFormContext from "../hooks/useFormContext"

const Question17 = () => {

    const {data, handleChange} = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <p className="questionText">Any futbol-related goals/dreams?</p>
                <div className="flex-col">
                    <textarea
                        type="text"
                        className="textField"
                        id="goals"
                        name="goals"
                        placeholder="Coaching my local HS by 2030"
                        //pattern="([A-Z])[\w+.]{1,}"
                        value={data.goals}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )

    return content
}
export default Question17