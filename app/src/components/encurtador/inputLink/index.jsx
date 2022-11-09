import React from "react";

const InputLink = (props) => {

    return (
        <form onSubmit={(e) => props.funcaoSubmit(e)}>
            <div className="form-group">
                <label>{props.instrucoes}</label>
                <input
                    onChange={(e) => props.funcaoSetLink(e)}
                    className="form-control m-2"
                    required={true}
                    placeholder='Link...'></input>
                <button className="btn btn-dark m-2" type="submit">Short</button>
            </div>
        </form>
    )

}

export default InputLink;