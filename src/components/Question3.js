import useFormContext from "../hooks/useFormContext"

const Question3 = () => {

    const {data, handleChange} = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <p>Who is your favorite player?</p>
                <div className="flex-col">
                    <textarea
                        type="text"
                        id="favplayer"
                        className="textField"
                        name="favplayer"
                        placeholder="Ronaldinho"
                        //pattern="([A-Z])[\w+.]{1,}"
                        value={data.favplayer}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )

    return content
}
export default Question3