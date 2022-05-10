import { SocketContext } from "../store/socket-context";
import { useContext } from "react";

export const useSocket = () => {
    const socket = useContext(SocketContext);
    return socket;
}