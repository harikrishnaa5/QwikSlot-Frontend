import { users } from "../temp";
const Table = () => {
    const headers = Object.keys(users[0]);
    return (
        <div className="flex-1 min-h-0 rounded-xl p-6 mt-4 border border-green-200 shadow-sm shadow-green-200 flex flex-col">
            {/* Scroll container for table */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-gray-200">
                <table className="w-full">
                    <thead className="bg-gray-100 sticky top-0 z-10">
                        <tr>
                            {headers.map((key) => (
                                <th
                                    key={key}
                                    className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200"
                                >
                                    {key === "id" ? "Sl.no" : key}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((row) => (
                            <tr key={row.id} className="even:bg-gray-50 hover:bg-gray-100">
                                <td className="pl-4 border-b border-gray-200">{row.id}</td>
                                <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">
                                    <p>{row.user.name}</p>
                                    <p>{row.user.email}</p>
                                    <p>{row.user.phone}</p>
                                </td>
                                <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">
                                    {row.registeredDate}
                                </td>
                                <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">
                                    {row.scheduledDate}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
