const AddButton = ({ setOpen }) => {
    return (
        <div onClick={()=>setOpen(true)} className="flex justify-center items-center py-2 px-7 bg-green-400 rounded-xl cursor-pointer active:scale-98 transition-colors duration-300 hover:bg-green-500">
            Add
        </div>
    );
};

export default AddButton;
