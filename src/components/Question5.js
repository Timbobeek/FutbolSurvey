import useFormContext from "../hooks/useFormContext"

const Question5 = () => {

    const {data, handleChange} = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <p>What's your favorite club?</p>
                <div className="flex-col">
                    <input
                        type="text"
                        id="favclub"
                        name="favclub"
                        placeholder="Barcelona"
                        //pattern="([A-Z])[\w+.]{1,}"
                        value={data.favclub}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )

    return content
}
export default Question5