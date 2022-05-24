export default function Item(props) {
    let classes = ''
    let { img, t, p, list } = props
    let title = props.title ? props.title : 'Cordell Bonnieux'
    let id = 'inneritem' + title.split(' ').join('')
    if (img) {
        classes.length > 1 ? classes += ' img' : classes += 'img'
        img = <img src={img} alt={title} />
    } else {
        img = <></>
    }
    if (title) {
        t = <h2>{title}</h2>
    } else {
        t = <></>
    }
    if (p) {
        classes.length > 1 ? classes += ' text' : classes += 'text'
        p = <p>{p}</p>
    } else {
        p = <></>
    }
    if (list) {
        if (!classes.includes('text')) {
            classes.length > 1 ? classes += ' text' : classes += 'text'
        }
        let listItems = []
        list.items.forEach((item, index) => {
            let ukey = 'item' + item.toString()
            listItems.push(<li key={ukey}>{item}</li>)
        })
        list = (
            <div className="list">
                <h4>{list.title}</h4>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    } else {
        list = <></>
    }
    return (
        <figure className={classes} key={id} id={id}>
            {img}
            {t}
            {p}
            {list}
        </figure>
    )
}