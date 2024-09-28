import './mentors.scss'
import { CloseIcon, DownArrow, SearchIcon } from '../../assets/Icons'
import UserCardInfo from './user-card/UserCardInfo'
import { Select } from 'antd'

const Mentors = () => {
  return (
    <div className='mentors bg-primary-var'>
        <header className=' bg-alt rounded-tl-3xl rounded-tr-3xl border flex'>
            <h2 className='text-4xl py-10 flex-[30%] px-10 font-semibold h-full flex items-center'>Mentors</h2>
            <div className='bg-red flex-[50%] bg'>                {/* dfd */}
            </div>
        </header>
       
        <div className='border-b border-gray-300 flex py-8 px-5 gap-5'>
            <div className='flex gap-3'>
                <Select
                className=' custom-select '
                

                allowClear
                placeholder="Role"
                />
                  <Select
                
                className='custom-select'
                allowClear
                placeholder="Company"
                suffixIcon={<DownArrow/>}

                
                />
                    <Select
                    className='custom-select'
                    // style={{ width: 120, borderRadius: "20px" }}
                    allowClear
                    placeholder="Slot"
                    suffixIcon={<DownArrow/>}

                    
                    />
                       <Select
                        className='custom-select'
                        // style={{ width: 120, borderRadius: "20px" }}
                        allowClear
                        placeholder="Rating"
                        suffixIcon={<DownArrow/>}            
                        />
                
            </div>
     

          
        
          
        
            <div className='flex rounded-3xl px-6 items-center gap-5 w-full bg-primary border border-gray-300 relative'>
                <span className='absolut'><SearchIcon/></span>
                <input type="text" className='py-2 px-2 bg-transparent w-full focus:outline-none' placeholder='Search by name, company, role'/>

            </div>
        </div>
        <div className='px-5'>

        <div className=' flex py-7 gap-5'>
            <span className='px-5 py-1 border border-gray-400 rounded-3xl flex items-center gap-2 text-gray-700 font-medium'>   SE/SDE  <CloseIcon/>    </span>
            <span className='px-5 py-1  border border-gray-400 rounded-3xl flex items-center gap-2 text-gray-700 font-medium'>   DS/AI/ML  <CloseIcon/>    </span>
            <span className='px-5 py-1 border border-gray-400 rounded-3xl flex items-center gap-2  text-gray-700 font-medium'>   FAANG  <CloseIcon/>    </span>
            <span className='px-5 py-1 border border-gray-400 rounded-3xl flex items-center gap-2  text-gray-700 font-medium'>   Startups  <CloseIcon/>    </span>
          
        </div>
        <UserCardInfo/>
        
        </div>
    </div>
  )
}

export default Mentors