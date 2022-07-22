const StatementInput = (props)=>{

    return(
        <div >
            <p className="mx-2 mt-1 font-semibold text-xl">
                What is your question?
            </p>
            <input type="text" 
                    className="sm:m-4 my-4 p-4 h-13 sm:w-3/5 w-full rounded-xl outline-none"
                    name="question-input"
                    placeholder="Your question"
                    value={props.Statement}
                    onChange={props.onChange} />
        </div>
    );

}

export default StatementInput;