import Message from "./message";
import useGetMessages from "../../hooks/usegetmessages";
import MessageSkeleton from "./skeleton";
import {useRef,useEffect} from "react"
import useListenMessages from "../../hooks/uselistenmessage";
import "../../App.css"
const Messages = () => {
	const {messages,loading}=useGetMessages()
	const lastmessageref=useRef()
	useListenMessages()
	useEffect(()=>{
              lastmessageref.current?.scrollIntoView()
	},[messages])
	return (
		<div className='px-4 flex-1 overflow-auto' id="container">
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastmessageref} >
						<Message message={message} />
					</div>
				))}
			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
	
		</div>
	);
};
export default Messages;