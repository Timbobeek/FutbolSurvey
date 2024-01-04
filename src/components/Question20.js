import useFormContext from "../hooks/useFormContext"

const Question20 = () => {

    const {data, handleChange} = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <p>Favorite ball?</p>
                <div className="flex-col">
                    <input
                        type="text"
                        id="ball"
                        name="ball"
                        placeholder="Brazuca"
                        //pattern="([A-Z])[\w+.]{1,}"
                        value={data.ball}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )

    return content
}
export default Question20