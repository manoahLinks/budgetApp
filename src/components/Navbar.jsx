import { Form, NavLink } from "react-router-dom";


// library
import { TrashIcon, HomeModernIcon } from '@heroicons/react/24/solid'

const Navbar = ({userName}) => {
    return ( 
        <div className="flex md:p-5 p-3 shadow-lg justify-between">
            <NavLink
                to={`/`}
                className={`flex items-center `}
            >
                <HomeModernIcon width={20}/>
                <span className="font-semibold ">E-Budget</span>
            </NavLink>
            {
                userName && (
                    <Form
                        method="post"
                        action="/logout"
                        onSubmit={(event) => {
                            if(!confirm("Delete user and all data ?")){
                                event.preventDefault()
                            }
                        }}
                    >
                        <button type="submit" className="flex items-center gap-x-2 bg-red-500 text-white p-1 rounded-md">
                            <span>Delete User</span>
                            <TrashIcon width={20}/>
                        </button>
                    </Form>
                )
            }
        </div>
     );
}
 
export default Navbar;