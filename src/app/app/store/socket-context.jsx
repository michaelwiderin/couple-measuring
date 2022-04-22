import { createContext, useState, useEffect } from 'react';

const url = 'ws://192.168.4.1:80';
// const url = 'ws://10.0.0.27:3000';
const webSocket = new WebSocket(url);

export const SocketContext = createContext(webSocket);

export const SocketContextProvider = (props) => {
    const [ws, setWs] = useState(webSocket);

    useEffect(() => {
        const onClose = () => {
            console.log('onClose');
            setTimeout(() => {
                setWs(new WebSocket(url))
            }, 1000);
        };

        ws.addEventListener('close', onClose);

        return () => {
            ws.removeEventListener('close', onClose);
        };
    }, [ws, setWs]);

    return (
        <SocketContext.Provider value={ws}>
            {props.children}
        </SocketContext.Provider>
    );
};