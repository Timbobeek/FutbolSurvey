import useFormContext from "../hooks/useFormContext"

const Question19 = () => {

    const {data, handleChange} = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <p className="questionText">Favorite pair of cleats?</p>
                <div className="flex-col">
                    <textarea
                        type="text"
                        className="textField"
                        id="clt"
                        name="clt"
                        placeholder="Nike Total 90"
                        //pattern="([A-Z])[\w+.]{1,}"
                        value={data.clt}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )

    return content
}
export default Question19