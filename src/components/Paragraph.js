export default function Paragraph(props) {
    let { content } = props
    if (!content) {
        return <></>
    }
    return (
        <p>{content}</p>
    )
}