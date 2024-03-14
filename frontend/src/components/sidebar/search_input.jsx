import { IoSearchSharp } from "react-icons/io5";
import usegetconversations from "../../hooks/usegetconversations";
import {useAuthContext} from "../../context/auth_context";
import toast from "react-hot-toast";
import { useState } from "react";
const SearchInput = () => {
  const { conversations } = usegetconversations();
  const [search, setSearch] = useState("");
  const {selectedconversation,setselectedconversation } = useAuthContext();

  const handlesubmit = (e) => {
        e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
        
		if (conversation) {
			setselectedconversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handlesubmit}>
      <input
        type="text"
        placeholder="Search…"
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-[#584CD7] text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};
export default SearchInput;
