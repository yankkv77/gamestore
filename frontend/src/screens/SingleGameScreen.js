import { Link as LinkRouter } from 'react-router-dom'
import games from '../games'
import '../static/css/SingleGame.css'



function SingleGameScreen({ match }) {

    const game = games.find((p) => p._id === match.params.id)

    return (
        <div className='single-game-message'>

            <div className='single-game-container'>
                <div className='single-g-img'>
                    <img className='game-img' src={game.image} />
                    <a href={game.trailer} target='_blank'>Watch Trailer</a>
                </div>
                <div className='single-g-description'>
                    <h3>{game.name}</h3>
                    <p>{game.description}</p>
                </div>
                <div className='single-g-purchase'>
                    <h2>Price: <span>$ {game.price}</span></h2>
                    <p>Status: {game.count_in_stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
                    {game.count_in_stock > 0 && (
                        <button className='buy-wrapper'>
                            <LinkRouter to='#' className='buy-link'>Buy</LinkRouter>
                        </button>
                    )}

                </div>
            </div>

        </div>
    )
}

export default SingleGameScreen