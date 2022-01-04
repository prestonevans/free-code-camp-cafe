export default function Item(props) {
    const {coffee, price} = props;
    return (
        <article>
            <p>{coffee}</p>
            <p>{price}</p>
        </article>
    )
}