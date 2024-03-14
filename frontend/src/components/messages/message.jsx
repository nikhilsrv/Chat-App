import { useAuthContext } from "../../context/auth_context";
import { extractTime} from "../../utils/extractTime"

const Message = ({ message }) => {
	const { authUser,selectedconversation } = useAuthContext();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectedconversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

	//const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			
			<div className={`chat-bubble ${bubbleBgColor} ${chatClassName==="chat-start"?"bg-[white] text-[black]":"bg-[#7B70EE] text-[white]"}  pb-2`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-[white]'>{formattedTime}</div>
		</div>
	);
};
export default Message;