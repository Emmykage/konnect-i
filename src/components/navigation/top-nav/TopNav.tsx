import { Notification } from '../../../assets/Icons'
import userImage from '../../../assets/images/pictures/user-image.png'
const TopNav = () => {
  return (
    <div className='flex py-3 px-6 justify-end top-0 left-0 w-full'>

        <div className='flex gap-4 items-center'>

        <span className='rounded-lg bg-primary p-2.5'>
            <Notification/>
        </span>
        <span className='flex rounded-xl items-center gap-3 px-3 py-1 bg-primary'>
            <img src={userImage} alt='user Image' className='w-8 border border-black rounded-full '/>
                <span>Jimmy</span>
        </span>

        </div>

    </div>
  )
}

export default TopNav