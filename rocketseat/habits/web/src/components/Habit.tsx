interface HabitProps {
    title: string
}


function Habit({ title }: HabitProps) {
    return (
        <>
            <button className="bg-zinc-900 w-30 h-15 text-rose-600 rounded m-2">{title}</button>
        </>
    )
}

export default Habit;