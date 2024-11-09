

const BorrowinwRow = ({ borrowing, handleDelete, handleBorrowingConfirm }) => {
    const { _id, name, borrowerName, email, bookingDate, dueDate, image, status } = borrowing;

    

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm btn-outline">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            {image && <img src={image} alt={name} />}
                        </div>
                    </div>

                </div>
            </td>
            <td>
                {name}
            </td>
            <td>
                {borrowerName}
            </td>
            <td>
                {email}
            </td>
            <td>{bookingDate}</td>
            <td>{dueDate}</td>
            <th>
                {   status === 'confirm' ? <span className="font-bold text-primary">confirmed</span> : 
                    <button onClick={() => handleBorrowingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button> }
            </th>
        </tr>
    );
};

export default BorrowinwRow;