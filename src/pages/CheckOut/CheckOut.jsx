import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";


const CheckOut = () => {

    const book = useLoaderData();
    const { _id, name, author, category, content, image, quantity } = book;
    const {user} = useContext(AuthContext);

    const handleBorrowBook = event =>{
        event.preventDefault();

        const form = event.target;
        const borrowerName = user?.name || form.borrowerName.value;
        const bookingDate = form.bookingDate.value;
        const dueDate = form.dueDate.value;
        const email = user?.email;
        const borrowing = {
            name,
            image,
            borrowerName,
            email,
            bookingDate,
            dueDate,
            book: _id
        }

        console.log(borrowing);

        fetch('https://booklend-server.vercel.app/borrowings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(borrowing)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.insertedId){
                alert('Borrowing Successful')
            }
        })

    }

    return (
        <div className="p-8">
            {/* <h2 className="text-3xl text-orange-600 font-semibold">Request Book: {name}</h2> */}
            <h2 className="text-3xl text-orange-600 font-semibold">Collect your Book</h2>
            <div className="flex items-center">
                <div>
                    <img src={image} alt="" />
                </div>
                {/* hero */}

                <form className="card-body" onSubmit={handleBorrowBook}>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-[#333333]">Name</span>
                            </label>
                            <input type="text" name="borrowerName" defaultValue={user?.name || ''} placeholder="Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#333333]">Borrowing Date</span>
                            </label>
                            <input type="date" name="bookingDate" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#333333]">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="Your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#333333]">Due Date</span>
                            </label>
                            <input type="date" name="dueDate" className="input input-bordered" required />

                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#333333]">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your email" className="input input-bordered" required />

                        </div> */}
                    </div>


                    <div className="form-control mt-6">
                        {/* <button className="btn btn-primary">Login</button> */}
                        <input className="btn bg-orange-600 btn-block text-[#333333]" type="submit" value="Confirm your Book" />
                    </div>
                </form>
            </div>
        </div>

        // {/* hero end */ }
        // 

    );
};

export default CheckOut;