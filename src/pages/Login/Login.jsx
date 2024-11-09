import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/login.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';
import axios from 'axios';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const user = { email };
                // navigate(location?.state ? location?.state : '/')
                // get access token
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            navigate(location?.state ? location?.state : '/')
                        }
                    })

            })
            .catch(error => console.log(error));

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
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl font-bold">Login now!</h1>
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
                            <button className="btn bg-orange-600 text-[#333333] hover:bg-transparent hover:text-orange-600">Login</button>
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                    <div className="divider bg-orange-600 h-[1px]"></div>
                    <p className='text-white mb-4'>New to Bookland <Link className='text-info font-bold' to="/signup">Sign up</Link></p>
                </div>
                
            </div>
        </div>
    );
};

export default Login;



