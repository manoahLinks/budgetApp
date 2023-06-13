import { Link } from "react-router-dom";

const Taskbar = () => {
    return ( 
            <div className="block md:hidden flex justify-evenly py-4 bg-white fixed bottom-0 w-full">
                <Link to={'/'} className="flex text-slate-500 flex-col items-center">
                    <svg className="w-5 h-5 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" >
                        <path id="Subtract" fill="currentColor" fillRule="evenodd" d="M12 0.654663L23 10.5547V23H1V10.5547L12 0.654663ZM13 23V17H11V23H13Z" clipRule="evenodd" />
                    </svg>
                    <span>Home</span>
                </Link>

                <Link to={`/budgets`} className="flex flex-col items-center text-slate-500">
                    <svg className="w-5 h-5 fill-slate-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M11 2.04932V12.9999H21.9506C21.4489 18.0533 17.1853 21.9999 12 21.9999C6.47715 21.9999 2 17.5228 2 11.9999C2 6.81459 5.94668 2.55104 11 2.04932ZM13 2.04932C17.7244 2.51839 21.4816 6.27552 21.9506 10.9999H13V2.04932Z"></path>
                    </svg>
                    <span>Budgets</span>
                </Link>

                <Link to={`/expenses`} className="flex flex-col items-center">
                    <svg className="w-5 h-5 fill-slate-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M3 15V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V19C21 20.6569 19.6569 22 18 22H4C2.34315 22 1 20.6569 1 19V17H17V19C17 19.5523 17.4477 20 18 20C18.5523 20 19 19.5523 19 19V15H3Z"></path>
                    </svg>
                    <span className="text-slate-500">Transactions</span>
                </Link>

                <Link className="flex flex-col items-center">
                    <svg className="w-5 h-5 fill-slate-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M14 21L12 23L10 21H4.99509C3.89323 21 3 20.1074 3 19.0049V4.99509C3 3.89323 3.89262 3 4.99509 3H19.0049C20.1068 3 21 3.89262 21 4.99509V19.0049C21 20.1068 20.1074 21 19.0049 21H14ZM6.35687 18H17.8475C16.5825 16.1865 14.4809 15 12.1022 15C9.72344 15 7.62182 16.1865 6.35687 18ZM12 13C13.933 13 15.5 11.433 15.5 9.5C15.5 7.567 13.933 6 12 6C10.067 6 8.5 7.567 8.5 9.5C8.5 11.433 10.067 13 12 13Z"></path>
                    </svg>
                    <span className="text-slate-500">Account</span>
                </Link>
            </div>
     );
}
 
export default Taskbar;