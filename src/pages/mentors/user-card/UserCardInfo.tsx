import "./imgInfo.scss"
import { NavLink } from 'react-router-dom'
import { FavoriteIcon, HandShake, Person, TargetIcon } from '../../../assets/Icons'
import userMentors from '../data/userData'

const UserCardInfo = () => {

  return (
<div className='profileInfo'>
{
    userMentors.map(user => (

        <div className='infoCard md:px-10 md:py-10 px-2 py-4 flex flex-col md:flex-row bg-white rounded-3xl gap-4 mb-10'>
        <div>
            <div className='w-56 img-cont block m-auto'>
            <img src={user.image} alt="" className={`${user.theme} rounded-2xl w-full `}/>
    
    
            </div>
            <div className='bg-primary-var rounded-lg py-2 my-3 flex items-center justify-center gap-3 px-4 pr-5'>
                <span className='text-gray-700 font-semibold flex items-center gap-1'>5.0 <FavoriteIcon/></span>
                <span className='text-gray-400'>                    |                        </span> 
                <span className='text-sm text-gray-700 font-semibold'>3 Testimonials</span>
            </div>
        </div>
        <div className='info-content px-0 flex-1'>
            <div className='personal-info flex flex-col md:flex-row flex-1'>
                <div className='px-4 flex-1'>
                    <div className='flex items-cent gap-3'>
                        <span className='my-1'>
                        <Person/>
    
                        </span>
                        <div>
                            <p className='text-2xl font-semibold text-gray-900'>
                               {user.first_name}
                            </p>
                            <p className='text-xl  text-gray-900'>
                                <span className='font-semibold'>{user.current_position}</span> at <span className='font-semibold'>{user.current_company}</span>  
                            </p>
    
                        </div>
    
              
    
                    </div>
                    <div className='flex items-cent gap-3 my-4'>
                        <TargetIcon/>
    
                        <div>
    
                        <p className='text-lg font-normal text-gray-700'>
                           {user.job_role}
                        </p>
                        <p className='text-gray-900'>
                            <span className='font-semibold text-xl'>Software Engineering</span>
                         </p>
    
                        </div>
    
    
    
                    </div>
    
    
                </div>
                <div className="bg-red-">
                    <NavLink to={`/mentors/${user.id}`} className={"block md:w-max rounded-3xl text-gray-800  border font-semibold border-black/80 text-base px-8 py-2 bg-theme-purple text-center"}>Konnect</NavLink>
                </div>
    
            </div>
            <div className='flex bg-[#EEF0F8] items-cent gap-3 py-4 px-4 my-5 border rounded-2xl'>
                <HandShake/>
                <div className='flex-1'>
                    <p>Help you with</p>
                    <div className='flex justify gap-4 md:gap-10 flex-col md:flex-row '>
                        <span className='font-semibold  text-base md:text-xl'>Interview Preparation</span>
                        <span className='text-gray-400 hidden md:block'>|</span>
                        <span className='font-semibold  text-base md:text-xl'>Resume review Preparation</span>
                        <span className='text-gray-400 hidden md:block'>|</span>

                        <span className='font-semibold  text-base md:text-xl'>Career  Preparation</span>
                        <span className='text-gray-400 hidden md:block'>|</span>

                        <span className='font-semibold  text-base md:text-xl text-gray-600 hidden md:block'>+</span>
                    </div>
                </div>
    
            </div>
    
        </div>
    </div> 
    ))
}

</div> )
}

export default UserCardInfo