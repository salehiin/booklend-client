import img from '../../assets/login.jpg'

const Login = () => {

    const handleLogin = event =>{
        event.preventDefault();

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <img src={img} alt="" className="max-h-[90vh] object-cover rounded-lg" />
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-1/2">
                    
                    {/* <img src={img} alt="Login" className='w-full rounded-lg' /> */}
                </div>
                <div className="card bg-transparent text-orange-600 w-full max-w-sm shrink-0 shadow-2xl bg-gradient-to-r from-[#01161ecc] to-[#FAF9F61A]">
                {/* <img src={img} alt="" className="w-full object-cover" /> */}
                    <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-3xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-600 text-[#333333] hover:bg-transparent hover:text-orange-600">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;



