import useFormContext from "../hooks/useFormContext"

const Question10 = () => {

    const {data, handleChange} = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <p>What's your worst futbol memory as a spectator?</p>
                <div className="flex-col">
                    <input
                        type="text"
                        id="wrsmemspec"
                        name="wrsmemspec"
                        placeholder="Ronaldo not winning WC2022"
                        //pattern="([A-Z])[\w+.]{1,}"
                        value={data.wrsmemspec}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )

    return content
}
export default Question10