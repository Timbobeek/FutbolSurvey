import useFormContext from "../hooks/useFormContext"

const Question6 = () => {

    const {data, handleChange} = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <p>What's your favorite national team?</p>
                <div className="flex-col">
                    <input
                        type="text"
                        id="natteam"
                        name="natteam"
                        placeholder="USA"
                        //pattern="([A-Z])[\w+.]{1,}"
                        value={data.natteam}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )

    return content
}
export default Question6