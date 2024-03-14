import Conversations from "./conversations";
import LogoutButton from "./logout";
import SearchInput from "./search_input";

const Sidebar = () => {
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col bg-[white] rounded-[10px]'>
			<SearchInput />
			<div className='divider  px-3 '></div>
			<Conversations />
            <LogoutButton /> 
		</div>
	);
};
export default Sidebar;