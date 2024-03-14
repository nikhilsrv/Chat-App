import { useEffect } from "react";
import { useAuthContext } from "../context/auth_context";

import notificationSound from "../assets/notification.mp3";

const useListenMessages = () => {

	const { messages, setmessages,socket } = useAuthContext();

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			
			const sound = new Audio(notificationSound);
			sound.play();
			setmessages([...messages, newMessage]);
		});

		return () => socket?.off("newMessage");
	}, [socket, setmessages, messages]);
};
export default useListenMessages;