import  { useState } from 'react'
import userMentors from '../data/userData'
import { useParams } from 'react-router-dom'
import {FavIcon, FavoriteIcon, FavoritIconLg, InCurrency, Person, TargetIcon } from '../../../assets/Icons'
import testImage from "../../../assets/images/pictures/testimonial-image.png"
import { testimonialData } from '../data/testimonials'
import './mentorUser.scss'
import { activityData } from '../data/activitiesData'
const MentorUser = () => {
    const {id} = useParams()
    const user = userMentors.find(user => user?.id == Number(id))
    const [selectedAct, setSelectedAct] = useState("all")


    const actions = [{
        label: "All", action: "all"
    },
    {
        label: "1:1 call", action: "1-1-call"
    },
    {
        label: "Priority DM", action: "priority-dm"
    },
    {
        label: "Package", action: "package"
    },
    {
        label: "Webinar", action: "webinar"
    }]
  return (
    <div className='mentorUser bg-primary-var'>
       
        <header className='p-3 md:p-10 bg-alt justify-center items-center md:items-stretch md:justify-between flex-col md:flex-row rounded-tl-3xl rounded-tr-3xl border flex gap-10'>
            <div className='flex flex-col md:flex-row md:gap-10'>
                
        
                <img src={user?.image} alt="" className={`${user?.theme} rounded-2xl border border-black bg-red-300 w-52 m-auto`}/>

                <div className='mt-8 bg-[#DFE4F8] rounded-2xl'>

                    <div className='text-4xl gap-3 py-4 flex-[30%] px-2 md:px-10 font-semibold flex items-'>
                        <Person/><div>
                        <p className='text-2xl  md:leading-6'>{user?.first_name } {user?.last_name}</p>
                        <p className='text-xl my-2 font-normal'> <span className='font-semibold'>{user?.current_position }</span> at <span className='font-semibold'> {user?.current_company}</span></p>
                        </div>
                    </div>
                    <div className='text-4xl gap-3  flex-[30%] px-2 md:px-10 font-semibold flex items-'>
                        <TargetIcon/><div>
                        <p className='font-normal text-lg leading-5'>Target domain</p>
                        <p className='text-xl my-2 font-normal'> <span className='font-semibold'>{user?.job_role }</span></p>
                        </div>
                    </div>
                </div>          
            </div>

            <div className='max-w-[230px] w-full flex md:flex-col'>
                <div className='mt-auto'>
                <div className='bg-primary-var rounded-lg py-2 my-0 flex items-center justify-center gap-3 px-4 pr-8'>
                    <span className='text-gray-700 font-semibold flex items-center gap-1'>5.0 <FavoriteIcon/></span>
                    <span className='text-gray-400'>                    |                        </span> 
                    <span className='text-sm text-gray-700 font-semibold'>3 Testimonials</span>
                </div>
                </div>

            </div>

            
        </header>

        <div className='flex p-12 gap-5 overflow-x-auto'>
            {actions.map(item => (
        <button onClick={() => setSelectedAct(item.action)} className={`${selectedAct == item.action && "text-white bg-[#624A14]"} px-8 py-3 shrink-0 border border-gray-400/60 rounded-3xl flex items-center bg-white gap-2 font-medium text-base`}>   {item.label} </button>

            ))}
      
        </div>
        <div className='px-5'>

        <section>

            {activityData.map(item => (
                  <div className='flex flex-col md:flex-row my-4 bg-white p-5 rounded-3xl gap-3'>
                    <div className='flex-1'>
                        <h3 className='text-3xl font-semibold'>{item.title}</h3>
                        <p className='text-xl text-gray-600 font-normal'>{item.note}</p>
        
                    </div>
                    <div className='flex-1 flex justify-center items-center'>
        
                    <div className='p-3 rounded-2xl items-center justify-between border flex border-[#EEF0F8] bg-[#EEF0F8] w-full'>
                        <div>
                            <div className='flex items-center gap-3'>
                                <img src={item.event.icon} alt="" />
                                <span className='text-2xl font-semibold'>{item.event.time_period}</span>


                            </div>
                            <p className='text-xl text-gray-600'>Google meet</p>

                            
                            </div>
                            
                            <span className='py-2 px-6 bg-white rounded-3xl border border-[#52525B] flex items-center  font-semibold gap-3'><InCurrency/>{item.fee}</span>
                        
                    </div>
                    </div>
      
              </div>

            ))}
      
             </section>

        <section className='py-4'>
            <div className='flex flex-col md:flex-row justify-between my-7'>
                <h3 className='text-[40px] font-semibold text-center '>Testimonials</h3>
                <p className='font-normal text-3xl justify-center flex gap-4 items-center'>Rating <span className='bg-white py-2 px-8 rounded-lg  font-semibold flex items-center gap-3'>5.0 <FavoritIconLg/></span></p>
            </div>
            <div className='grid md:grid-cols-2 gap-5 mb-5'>
                {testimonialData.map(item => (
                    <div className='border md:p-10 border-[#F2D9AA] bg-white p-5 rounded-2xl'>
                    <div>
                        <span className='bg-[#F2EAE6] font-semibold flex w-max px-4 py-2 text-gray-900  items-center gap-3 rounded text-sm'>5.0 <FavIcon/> </span>
                    </div>
                    <p className='my-5 underline-offset-8 decoration-[#F2D9AA] underline leading-7 underline-[red] font-semibold text-gray-800'>
                        {item.text}
                    </p>

                    <div className='flex gap-5'>
                        <img src={testImage} alt="" className='w-16' />
                        <div>
                            <p className='text-2xl'>{item.name}</p>
                            <p className='text-xl text-gray-500'>{item.occuppation}</p>
                        </div>

                    </div>
                </div>
                ))}
                
            </div>
        </section>

  
        {/* <UserCardInfo/> */}
        
        </div>
    </div>
  )
}

export default MentorUser