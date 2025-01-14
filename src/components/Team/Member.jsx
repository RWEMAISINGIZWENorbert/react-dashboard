import PropTypes from 'prop-types';
const Member = ({user}) => {
  return (
    <div className="flex justify-between items-center py-2">
        <div className="flex items-center gap-2">
            <img src={user.image} alt={user.name} className="w-12 h-12 rounded-full" />
            <div>
                <h1 className="font-bold">{user.name}</h1>
                <span className="font-semibold">{user.country}</span>
            </div>
        </div>
        <span className={`${user.bgColor} p-2 rounded-xl font-medium text-xs dark:text-gray-300 dark:bg-gray-500`}>{user.role}</span>
    </div>
  )
}

export default Member;
Member.propTypes = {
    user: PropTypes.any
}