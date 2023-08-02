import Square from "./squares";


export default function ModalWinner({ winner, resetBoard }) {

    return (
        <section className="modal-winner">
            <div className="modal-container">
                <header>
                    <h2 className="winner-title">{winner === false ? 'Empate' : 'Ganó'}</h2>
                    {
                        winner
                            ? <Square>{winner}</Square>
                            : <h2 style={{ textAlign: "center" }}>😐</h2>
                    }
                </header>
                <footer>
                    <button onClick={resetBoard}>Empeazar de nuevo</button>
                </footer>
            </div>
        </section>
    )
}