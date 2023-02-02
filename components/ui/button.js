export default function Button({ children }) {
    return (
        <>
            <button className='border-gray-200 border-2 rounded-3xl p-3'>
                {children}
            </button>
        </>
    )
}