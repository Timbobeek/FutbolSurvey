import useFormContext from "../hooks/useFormContext"

const Question9 = () => {

    const {data, handleChange} = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <p>What's your favorite futbol memory as a spectator?</p>
                <div className="flex-col">
                    <input
                        type="text"
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