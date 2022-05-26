export default function List(props) {
    let { listObject } = props
    let items = []
    listObject.items.forEach((item) => {
        let key = 'item' + item.toString()
        items.push(<li key={key}>{item}</li>)
    })
    return (
        <div className="list">
            <h4>{listObject.title}</h4>
            <ul>
                {items}
            </ul>
        </div>
    )
}