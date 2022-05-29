export default function Image(props) {
    let { alt, src } = props
    let source = '../img/' + src
    if (!alt) {
        return <></>
    } else {
        return <img src={source} alt={alt} />
    }
}