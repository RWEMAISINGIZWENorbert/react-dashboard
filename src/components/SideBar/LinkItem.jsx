
const LinkItem = ({href, icon:Icon, text, badge}) => {
  return (
        <li className="list-none">
            <a href={href} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">
                <Icon className = 'mr-2' />
                <span className="flex-1 me-3">{text}</span>
                {
                  badge && <span className={`inline-flex items-center justify-center px-2 ms-3 text-sm font-medium rounded-full ${badge.color} ${badge.darkColor} ` }>{badge.text}</span>
                }
            </a>
        </li>
  )
}

export default LinkItem