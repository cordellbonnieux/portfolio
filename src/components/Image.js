export default function Image(props) {
    let { source, alt } = props
    if (!source) {
        return <></>
    } else {
        return <img src={source} alt={alt} />
    }
}