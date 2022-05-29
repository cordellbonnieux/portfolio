export default function Image(props) {
    let { alt } = props
    let source, path = '../img/'
    if (!alt) {
        return <></>
    } else {
        return <img src={source} alt={alt} />
    }
}