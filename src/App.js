import React, { useState } from 'react';
import axios from 'axios';
import '../src/index.css';
 


function App() {
    const [fileName, setFileName] = useState('');
    const [method, setMethod] = useState('get');
    const [iframeSrc, setIframeSrc] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let url;
            let response;

            if (method === 'get') {
                url = `http://localhost:3000/ruta/get-html?fileName=${fileName}`;
                response = await axios.get(url);
            } else if (method === 'post') {
                url = `http://localhost:3000/ruta/post-html`;
                response = await axios.post(url, { fileName });
            }

            const html = response.data;
            const blob = new Blob([html], { type: 'text/html' });
            const iframeURL = URL.createObjectURL(blob);

            setIframeSrc(iframeURL);
        } catch (error) {
            console.error('Error fetching the file', error);
            setIframeSrc('');
        }
    };

    return (
        <div className='Contenedor'>
            <h1>Llamado de api get/post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Npmbre de documento: <br/>
                        <small>pag1.html / pag2.html</small>

                        <input
                            type="text"
                            value={fileName}
                            onChange={(e) => setFileName(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Escoja el metodo:<br/>
                        <select
                            value={method}
                            onChange={(e) => setMethod(e.target.value)}
                        >
                            <option value="get">GET</option>
                            <option value="post">POST</option>
                        </select>
                    </label>
                </div>
                <button type="submit">Enviar datos</button>
            </form>
            {iframeSrc && (
                <iframe
                    src={iframeSrc}
                    title="HTML Viewer"
                    style={{ width: '100%', height: '600px', border: 'none' }}
                />
            )}
        </div>
    );
}

export default App;
