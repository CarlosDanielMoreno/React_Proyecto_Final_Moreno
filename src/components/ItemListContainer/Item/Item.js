import { Link } from "react-router-dom"

const Item = ({id, name, img, price, stock}) =>{

    return(
        <div className="card">
        <article className="">
            <header>
                <h2 className="title is-1">{name}</h2>
            </header>
            <div className="card-image">
            <picture className="">
                <img src={img} alt={name}/>
            </picture>
            </div>
            <section>
                <p className="title is-3">
                    ${price}
                </p>
                <p className="title is-3">
                   Cantidad disponible:{stock}
                </p>
            </section>
            <footer>
                <Link to={`/item/${id}`}>ver detalle</Link>
            </footer>
        </article>
        </div>

    )
}
export default Item