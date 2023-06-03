// heroicons imports
import { UserPlusIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

// rrd imports
import { Form } from "react-router-dom";

// assets
import Illustration from '../assets/Logistics-rafiki.png'

const Intro = () => {
    return ( 
        <div className="p-5 grid grid-col-1 md:grid-cols-2 justify-center justify-items-center items-center">
           <div className="flex flex-col gap-y-2">
                <h1 className="text-4xl font-bold">Take control of <br/> <span className="text-lime-400">Your money</span></h1>
                <p className="text-center">Personal budgeting is the secret to financial freedom. start your journey today</p>
                
                <Form method="post" className="flex flex-col gap-y-2">
                    <div className="flex relative items-center">
                        <EnvelopeIcon width={20} className="ml-2 absolute" />
                        <input 
                            type="text" 
                            name="userName" 
                            id="userName"
                            required
                            placeholder="what is your name ?"
                            className="w-full border text-center" 
                        />
                    </div>
                   <button type="submit" className="flex m-auto items-center p-2 bg-slate-900 text-white gap-x-2">
                    <span>Create Account</span>
                    <UserPlusIcon width={20}/>
                   </button>
                </Form>
           </div>
           <img src={Illustration} width={450}  alt="" />
        </div>
     );
}
 
export default Intro;