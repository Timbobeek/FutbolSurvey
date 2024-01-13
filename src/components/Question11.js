import useFormContext from "../hooks/useFormContext"

const Question11 = () => {

    const {data, handleChange} = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <p className="questionText">What's your favorite futbol memory as a player?</p>
                <div className="flex-col">
                    <textarea
                        type="text"
                        className="textField"
                        id="favmemplr"
                        name="favmemplr"
                        placeholder="Winning Kickers in 2015"
                        //pattern="([A-Z])[\w+.]{1,}"
                        value={data.favmemplr}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )

    return content
}
export default Question11