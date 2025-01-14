import userLogo from './../../assets/user01.png';
const User = () => {
  return (
    <div className="flex items-center gap-3 p-2 w-full bg-white rounded-full dark:bg-gray-600 dark:text-gray-300">
        <img src={userLogo} alt="user"  className='w-14 h-14 rounded-full'/>
        <div>
            <h3 className='font-semibold text-2xl'>Rin</h3>
            <p>Developer</p>
        </div>
    </div>
  )
}

export default User