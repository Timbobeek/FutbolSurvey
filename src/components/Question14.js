import useFormContext from "../hooks/useFormContext"

//make this optional?

const Question14 = () => {

    const {data, handleChange} = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <p>Why did you start playing?</p>
                <div className="flex-col">
                    <input
                        type="text"
                        id="why"
                        name="why"
                        placeholder="My dad was a pro player"
                        value={data.why}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )

    return content
}
export default Question14