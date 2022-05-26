export default function Heading3(props) {
    let { heading } = props
    if (!heading) {
        return <></>
    }
    return (
        <h3>{heading}</h3>
    )
}