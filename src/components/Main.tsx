import { useState } from "react";
import AddButton from "./AddButton";
import DialogComponent from "./DialogComponent";
import Table from "./Table";

const Main = () => {
       const [open, setOpen] = useState(false);
    return (
        <>
            <header className="flex-shrink-0 pb-4 flex items-center justify-between border-b-2 border-green-400 w-full">
                <h1 className="text-2xl font-bold">Users</h1>
                <AddButton setOpen={setOpen}/>
            </header>
            {/* <div className=""> */}
                <Table />
                <DialogComponent open={open} setOpen={setOpen}/>
            {/* </div> */}
        </>
    );
};

export default Main;
