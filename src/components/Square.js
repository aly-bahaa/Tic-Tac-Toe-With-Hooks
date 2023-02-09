

export default function Square({ value, onSquareClick ,winning}){

    return(
        <button  className={ winning === true ? 'winning-square' : 'square'} onClick={onSquareClick}>{value}</button>
    )
}