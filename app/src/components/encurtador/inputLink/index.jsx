import React from "react";

import './inputLinkStyle.css'

const InputLink = (props) => {

    return (
        <form onSubmit={(e) => props.funcaoSubmit(e)}>
            <div className="form-group">
                <label className="m-1">{props.instrucoes}</label>
                <input
                    onChange={(e) => props.funcaoSetLink(e)}
                    className="form-control m-1"
                    required={true}
                    placeholder='Link...'
                    defaultValue={props.shortLink}
                />
                <button className="btn btn-dark m-1" type="submit">Short</button>
            </div>
        </form>
    )

}

export default InputLink;