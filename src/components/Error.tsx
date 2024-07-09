


export default function Error({children} : {children:React.ReactNode}) {
    return (
        <p className="text-center md:my-3 my-2 bg-red-600 text-white font-bold md:p-2  p-1 uppercase text-sm rounded-xl">{children}</p>
    )
}
