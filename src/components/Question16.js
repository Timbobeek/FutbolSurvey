import useFormContext from "../hooks/useFormContext"

const Question16 = () => {

    const {data, handleChange} = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <p>What's your biggest achievement in futbol so far?</p>
                <div className="flex-col">
                    <input
                        type="text"
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