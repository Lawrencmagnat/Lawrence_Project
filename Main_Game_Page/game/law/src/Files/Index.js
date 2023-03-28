import './index.css'
function Files({ value, onClick}) {
    const style = value === "X" ? "box x" : "box o";
    return (
        <>
        <button className={style} onClick={onClick}>{value}</button>
        </>

    )
}

export default Files;