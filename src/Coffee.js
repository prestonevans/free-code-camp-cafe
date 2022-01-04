export default function Coffee(props) {
    return (
        <section className="coffee">
            <h2>Coffee</h2>
            {props.children}
        </section>
    )
}