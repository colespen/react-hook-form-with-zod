const Form = () => {
  return (
    <form className="bg-[#333247] px-8 pt-6 pb-8 mb-4">
      <div className="mb-4 md:flex md:justify-between">
        <div className="mb-4 md:mr-2 md:mb-0">
          <label
            className="block mb-2 text-sm font-bold text-[#d1d1d1]"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            className="bg-[#242424] w-full px-3 py-2 text-sm leading-tight text-[#d1d1d1] border-2 border-slate-700 focus:border-slate-600 rounded appearance-none focus:outline-none focus:shadow-outline placeholder:text-slate-400"
            id="firstName"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className="md:ml-2">
          <label
            className="block mb-2 text-sm font-bold text-[#d1d1d1]"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            className="bg-[#242424] w-full px-3 py-2 text-sm leading-tight text-[#d1d1d1] border-2 border-slate-700 focus:border-slate-600 rounded appearance-none focus:outline-none focus:shadow-outline placeholder:text-slate-400"
            id="lastName"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-[#d1d1d1]"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="bg-[#242424] w-full px-3 py-2 text-sm leading-tight text-[#d1d1d1] border-2 border-slate-700 focus:border-slate-600 rounded appearance-none focus:outline-none focus:shadow-outline placeholder:text-slate-400"
          id="email"
          type="email"
          placeholder="Email"
        />
      </div>
      <div className="mb-4 md:flex md:justify-between">
        <div className="mb-4 md:mr-2 md:mb-0">
          <label
            className="block mb-2 text-sm font-bold text-[#d1d1d1]"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="bg-[#242424] w-full px-3 py-2 text-sm leading-tight text-[#d1d1d1] border-2 border-slate-700 focus:border-slate-600 rounded appearance-none focus:outline-none focus:shadow-outline placeholder:text-slate-400"
            id="password"
            type="password"
          />
        </div>
        <div className="md:ml-2">
          <label
            className="block mb-2 text-sm font-bold text-[#d1d1d1]"
            htmlFor="c_password"
          >
            Confirm Password
          </label>
          <input
            className="bg-[#242424] w-full px-3 py-2 text-sm leading-tight text-[#d1d1d1] border-2 border-slate-700 focus:border-slate-600 rounded appearance-none focus:outline-none focus:shadow-outline"
            id="c_password"
            type="password"
          />
        </div>
      </div>
      <div className="mb-4">
        <input type="checkbox" id="terms" className="bg-[#242424]"/>
        <label
          htmlFor="terms"
          className= "ml-2 mb-2 text-sm font-bold text-[#d1d1d1]"
        >
          Accept Terms & Conditions
        </label>
      </div>
      <div className="mb-6 text-center">
        <button
          className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-800 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Register Account
        </button>
      </div>
      <hr className="mb-6 border-t-2 border-slate-600" />
      <div className="text-center">
        <a
          className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
      <div className="text-center">
        <a
          className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
          href="#"
        >
          Already have an account? Login!
        </a>
      </div>
    </form>
  );
};

export default Form;
