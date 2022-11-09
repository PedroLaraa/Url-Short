import React, {useState} from "react";

import './encurtadorStyle.css';

import InputLink from "./inputLink";

import http from '../../config';

const Encurtador = () => {

    const [link, setLink] = useState('');

    const shortURL = (e) => {

        e.preventDefault();

        http.post('', link)
        .then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <div className="d-flex align-items-center vh-100">
            <div className="row justify-content-center w-100">
                <div className="col-md-6">
                    <InputLink
                    funcaoSubmit={(e) => shortURL(e)}
                    funcaoSetLink={(e) => setLink(e.target.value)}
                    instrucoes='- Exemplo de link: https://example.com'
                    />
                </div>
            </div>
        </div>
    );
};

export default Encurtador;
