import type React from "react";
import GoogleIcon from "../assets/google-icon.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useReducer } from "react";

type FormState = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

type FormAction = { type: "SET_FIELD"; field: keyof FormState; value: string } | { type: "RESET" };

const initialState: FormState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
};

function formReducer(state: FormState, action: FormAction): FormState {
    switch (action.type) {
        case "SET_FIELD":
            return { ...state, [action.field]: action.value };
        case "RESET":
            return initialState;
        default:
            return state;
    }
}

const Auth: React.FC = () => {
    const location = useLocation();
    const isSignup = location.pathname === "/signup";
    const [state, dispatch] = useReducer(formReducer, initialState);

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: "SET_FIELD",
            field: e.target.name as keyof FormState,
            value: e.target.value,
        });
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({
            type: "RESET",
        });
    };
    useEffect(() => {
        dispatch({ type: "RESET" });
    }, [location.pathname]);

    return (
        <div className="w-screen min-h-screen bg-gray-100 flex justify-center items-center px-10 py-2">
            <div className="absolute top-6 left-12">
                <h1 className="text-lg md:text-3xl font-extrabold text-green-500">QwikSlot</h1>
            </div>

            <div className="w-full sm:min-w-96 sm:w-auto bg-white flex flex-col justify-center items-center mt-14 md:mt-0 p-8 rounded-xl shadow-lg">
                <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mb-4">{isSignup ? "Signup" : "Login"}</h2>

                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2.5">
                    {isSignup && (
                        <span className="flex flex-col md:flex-row md: gap-2">
                            <div className="flex flex-col">
                                <label className="text-sm font-medium mb-1 text-gray-700" htmlFor="firstName">
                                    First Name
                                </label>
                                <input
                                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500"
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    value={state.firstName}
                                    placeholder="First Name"
                                    onChange={handleFormChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-medium mb-1 text-gray-700" htmlFor="lastName">
                                    Last Name
                                </label>
                                <input
                                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500"
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    value={state.lastName}
                                    placeholder="Last Name"
                                    onChange={handleFormChange}
                                    required
                                />
                            </div>
                        </span>
                    )}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium mb-1 text-gray-700" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500"
                            type="email"
                            name="email"
                            id="email"
                            value={state.email}
                            placeholder="Email"
                            onChange={handleFormChange}
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-medium mb-1 text-gray-700" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500"
                            type="password"
                            name="password"
                            id="password"
                            value={state.password}
                            placeholder="Password"
                            onChange={handleFormChange}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 w-full bg-green-500 text-white font-semibold rounded-md py-2 hover:bg-green-600 transition-colors duration-200 transform active:scale-99 cursor-pointer"
                    >
                        {isSignup ? "Sign Up" : "Log In"}
                    </button>

                    <button
                        type="submit"
                        className="mt-4 w-full text-sm font-semibold rounded-md py-2 hover:bg-gray-100 transition-colors duration-200 transform active:scale-99 cursor-pointer flex justify-center items-center gap-2 border border-gray-300"
                    >
                        Login with Google <img className="w-4 h-4" src={GoogleIcon} alt="google_icon" />
                    </button>
                    <p className="text-xs place-self-center">
                        {isSignup ? (
                            <>
                                Already have an account?{" "}
                                <Link className="text-indigo-600 underline" to="/login">
                                    Login here
                                </Link>
                            </>
                        ) : (
                            <>
                                Don't have an account yet?{" "}
                                <Link className="text-indigo-600 underline" to="/signup">
                                    Register Here
                                </Link>
                            </>
                        )}
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Auth;
