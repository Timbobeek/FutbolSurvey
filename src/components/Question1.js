import useFormContext from "../hooks/useFormContext"

const Question1 = () => {

    const {data, handleChange} = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <p className="questionText">What's your name?</p>
                <div className="flex-col">
                    <textarea
                        type="text"
                        className="textField"
                        id="name"
                        name="name"
                        placeholder="Timmy"
                        //pattern="([A-Z])[\w+.]{1,}"
                        value={data.name}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )

    return content
}
export default Question1