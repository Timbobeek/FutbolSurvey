import useFormContext from "../hooks/useFormContext"

const QuestionFour = () => {

    const {data, handleChange} = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <p>What's your favorite team?</p>
                <div className="flex-col">
                    <input
                        type="text"
                        id="favteam"
                        name="favteam"
                        placeholder="Barcelona"
                        //pattern="([A-Z])[\w+.]{1,}"
                        value={data.favteam}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )

    return content
}
export default QuestionFour