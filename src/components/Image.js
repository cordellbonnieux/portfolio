export default function Image(props) {
    let { source, alt } = props
    return (
        <img src={source} alt={alt} />
    )
}