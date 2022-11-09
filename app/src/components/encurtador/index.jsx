import React, { useState } from "react";

import './encurtadorStyle.css';

import InputLink from "./inputLink";

import http from '../../config';

const Encurtador = () => {

    const [link, setLink] = useState('');

    const [shortLink, setShortLink] = useState('')

    const [copy, setCopy] = useState(false)

    const ShortURL = (e) => {

        e.preventDefault();

        setShortLink('');

        http.post(``, { "input": link })
            .then((res) => {

                const short = res.data;

                const code = short.map(v => v.code).toString();

                setShortLink(`gotiny.cc/${code}`);

            }).catch((err) => {
                console.log(err);
            });
    };

    const copyText = () => {

        document.getElementById('txtToCopy').select();
        document.execCommand("copy");

        setCopy(true)

    }

    return (
        <div className="d-flex align-items-center vh-100 container-input">
            <div className="row justify-content-center w-100">
                <div className="col-md-6 input-link p-4">
                    <InputLink
                        funcaoSubmit={(e) => ShortURL(e)}
                        funcaoSetLink={(e) => setLink(e.target.value)}
                        instrucoes='•Exemplo de link: https://example.com'
                    />
                    {shortLink !== '' && (
                        <div className="link-encurtado">
                            <label className="m-1">•Link encurtado:</label>
                            <input
                                type='text'
                                id="txtToCopy"
                                className="form-control m-1"
                                value={shortLink}
                                data-toggle="tooltip" 
                                data-placement="bottom" 
                                title={copy === true ? 'Copiado!!!' : 'Tente copiar!!!'}
                            />
                            <button
                                className="btn btn-dark m-1"
                                onClick={() => copyText()}
                            >Copiar Link</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Encurtador;
