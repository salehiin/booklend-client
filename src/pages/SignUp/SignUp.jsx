import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import img from '../../assets/register.jpg'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const {createUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        createUser(email, password)
        .then(result => {
            // create user entryin the database
            const userInfo = {
                name: name,
                email: email
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                if(res.data.insertedId){
                    // Swal.fire({});
                    alert('User created successfully')
                    navigate('/')
                }
            })
            const user = result.user;
            // console.log(user)
            // Swal.fire({});
            navigate(location?.state ? location?.state : '/')
        })
        .catch(error => console.log(error))

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <img src={img} alt="" className="max-h-[90vh] object-cover rounded-lg" />
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-1/2">

                    {/* <img src={img} alt="Login" className='w-full rounded-lg' /> */}
                </div>
                <div className="card bg-transparent text-orange-600 w-full max-w-sm shrink-0 shadow-2xl bg-gradient-to-r from-[#01161ecc] to-[#FAF9F61A]">
                    {/* <img src={img} alt="" className="w-full object-cover" /> FAF9F61A A3B4BD33*/}
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-3xl font-bold">Sign Up!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-600 text-[#333333] hover:bg-transparent hover:text-orange-600">Sign Up</button>
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                    <div className="divider bg-orange-600 h-[1px]"></div>
                    <p className='text-white mb-4'>Already have an account? <Link className='text-info font-bold' to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;