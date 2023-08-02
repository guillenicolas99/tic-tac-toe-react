
export default function Square({ children, index, updateBoard }) {

    const handleClick = () => {
        updateBoard(index)
    }

    return (
        <div onClick={handleClick} className="square">{children}</div>
    )
}