import { useSelector } from 'react-redux'

function Username() {
    const userName = useSelector((state) => state.user.username)

    if (!username) return null

    return (
        <div className="text-sm font-semibold hidden md:block ">
            {userName}
        </div>
    )
}

export default Username