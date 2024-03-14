import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/auth_context";
import MessageInput from "./message_input";
import Messages from "./messages";
import "../../App.css"
const NoChatSelected = () => {
	const {authUser}=useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser?.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};


const MessageContainer = () => {
	const {selectedconversation,setselectedconversation,onlineUsers}=useAuthContext();
	const is_online=onlineUsers?.includes(selectedconversation?._id) 
	
	return (
		<div  className='md:min-w-[450px] flex flex-col bg-[#584CD7] rounded-[10px] -webkit-'>
				{/* Header */}
				{!selectedconversation?<NoChatSelected/>:<><div className='bg-slate-500 px-4 py-2 mb-2 bg-white '>
					<span className='label-text'>{<button className={`w-[10px] ${is_online?"bg-[green]":"bg-[red]"} h-[10px] rounded-[50%]`}></button>}</span> <span className='text-gray-900 font-bold'>{selectedconversation.fullName}</span>
				</div>

				<Messages />
				<MessageInput /></>}
			
		</div>
	);
};
export default MessageContainer;