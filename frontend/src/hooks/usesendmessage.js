import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/auth_context";

const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setmessages, selectedconversation } = useAuthContext()

	const sendMessage = async (message) => {
		setLoading(true);
		try {
			const res = await fetch(`/api/message/send/${selectedconversation._id}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ message }),
			});
			const data = await res.json();
			if (data.error) throw new Error(data.error);

			setmessages([...messages, data]);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { sendMessage, loading };
};
export default useSendMessage;