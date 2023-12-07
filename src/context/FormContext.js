import { createContext, useState, useEffect } from "react";

const FormContext = createContext({});

export const FormProvider = ({children})=> {

    // this code defines the order of pages and where is the submit button at!
    const title = {
        0: 'Billing Info',
        1: 'Shipping Info',
        2: 'Question 1',
        3: 'Opt-In',
        4: 'Question 2',
        5: 'Question 3',
        6: 'Question 4'
    }

    const [page, setPage] = useState(0)

    //this is the data object that will be sent to database on the future!
    const [data, setData] = useState({
        billFirstName: "",
        billLastName: "",
        billAddress1: "",
        billAddress2: "",
        billCity: "",
        billState: "",
        billZipCode: "",
        sameAsBilling: false,
        shipFirstName: "",
        shipLastName: "",
        shipAddress1: "",
        shipAddress2: "",
        shipCity: "",
        shipState: "",
        shipZipCode: "",
        optInNews: false,
        name: "",
        // option 2 (using same name and not checked) ---> level: "",
        // you end up with {level : "last value checked or unchecked"}, which breaks the checkbox validation
        // we would need to redesign validation and have this object
        // level: [pro, semipro, acad] ???
        amateur: false,
        hs: false,
        acad: false,
        college: false,
        semipro: false,
        pro: false,  //this stays as a boolean
        mr: false,  //this gets value later
        favteam: ""
    })

    useEffect(() => {
        if (data.sameAsBilling) {
            setData(prevData => ({
                ...prevData,
                shipFirstName: prevData.billFirstName,
                shipLastName: prevData.billLastName,
                shipAddress1: prevData.billAddress1,
                shipAddress2: prevData.billAddress2,
                shipCity: prevData.billCity,
                shipState: prevData.billState,
                shipZipCode: prevData.billZipCode
            }))
        } else {
            setData(prevData => ({
                ...prevData,
                shipFirstName: "",
                shipLastName: "",
                shipAddress1: "",
                shipAddress2: "",
                shipCity: "",
                shipState: "",
                shipZipCode: ""
            }))
        }
    }, [data.sameAsBilling])

    const handleChange = e => {
        const type = e.target.type

        const name = e.target.name


        // if target is checked absent, then uses target.value
        //hence why it works for radio button where checked char is missing
        const value = type === ( "checkbox" || "radio")
            ? e.target.checked
            : e.target.value

        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const { billAddress2, sameAsBilling, shipAddress2, optInNews, ...requiredInputs } = data

    //next/prev/submit button data validation! 25:57

    const canSubmit = [...Object.values(requiredInputs)].every(Boolean) && page === Object.keys(title).length - 1

    const canNextPage1 = Object.keys(data)
        .filter(key => key.startsWith('bill') && key !== 'billAddress2')
        .map(key => data[key])
        .every(Boolean)  //makes sure the values are true aka non-empty

    const canNextPage2 = Object.keys(data)
        .filter(key => key.startsWith('ship') && key !== 'shipAddress2')
        .map(key => data[key])
        .every(Boolean)

    const canNextPage3 = Object.keys(data)
        .filter(key => key.startsWith('name'))   //makes sure that key "name" has some value entered,
        .map(key => data[key])
        .every(Boolean)
    
    const canNextPage4 = Object.keys(data)
        .filter(key => key.startsWith('optInNews'))   
        .map(key => data[key])
        .every(Boolean)

        // this is for name based checkbox validation
    // const canNextPage5 = Object.keys(data)
    //     .filter(key => key.startsWith('level'))   
    //     .map(key => data[key])
    //     .every(Boolean)

    const canNextPage51 = Object.keys(data)
        .filter(key => key.startsWith('amateur'))   
        .map(key => data[key])
        .every(Boolean)
    
    const canNextPage52 = Object.keys(data)
        .filter(key => key.startsWith('hs'))   
        .map(key => data[key])
        .every(Boolean)
    
    const canNextPage53 = Object.keys(data)
        .filter(key => key.startsWith('acad'))   
        .map(key => data[key])
        .every(Boolean)

    const canNextPage54 = Object.keys(data)
        .filter(key => key.startsWith('college'))   
        .map(key => data[key])
        .every(Boolean)

    const canNextPage55 = Object.keys(data)
        .filter(key => key.startsWith('semipro'))   
        .map(key => data[key])
        .every(Boolean)

    const canNextPage56 = Object.keys(data)
        .filter(key => key.startsWith('pro'))   
        .map(key => data[key])
        .every(Boolean)

    const canNextPage6 = Object.keys(data)
        .filter(key => key.startsWith('mr'))   
        .map(key => data[key])
        .every(Boolean)
        console.log(data)
    
    const canNextPage7 = Object.keys(data)
        .filter(key => key.startsWith('favteam'))
        .map(key => data[key])
        .every(Boolean)

    ///////////////////////////////////////////////////////////

    const disablePrev = page === 0

    // disables the next button until necessary values are entered (according to canNextPage1/2/3/etc)

    const disableNext =
            (page === Object.keys(title).length - 1)
            || (page === 0 && !canNextPage1)
            || (page === 1 && !canNextPage2)
            || (page === 2 && !canNextPage3)
            || (page === 3 && !canNextPage4)
            //|| (page === 4 && !canNextPage5) for name based checkbox validation
            || (page === 4 && !canNextPage51 && !canNextPage52 && !canNextPage53 && !canNextPage54 && !canNextPage55 && !canNextPage56 )
            || (page === 5 && !canNextPage6) 
            || (page === 6 && !canNextPage7)
    
    const prevHide = page === 0 && "remove-button"
    
    const nextHide = page === Object.keys(title).length - 1 && "remove-button"
    
    const submitHide = page !== Object.keys(title).length - 1 && "remove-button"

    return(
        <FormContext.Provider value={{title, page, setPage, data, setData, canSubmit, handleChange, disablePrev, disableNext, prevHide, nextHide, submitHide}}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext