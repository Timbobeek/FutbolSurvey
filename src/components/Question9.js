import useFormContext from "../hooks/useFormContext"

const Question9 = () => {

    const {data, handleChange} = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <p className="questionText">What's your favorite futbol memory as a spectator?</p>
                <div className="flex-col">
                    <textarea
                        type="text"
                        className="textField"
                        id="favmemspec"
                        name="favmemspec"
                        placeholder="Greece winning EURO2004"
                        //pattern="([A-Z])[\w+.]{1,}"
                        value={data.favmemspec}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )

    return content
}
export default Question9