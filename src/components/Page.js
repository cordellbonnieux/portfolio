import Item from './Item'

export default function Page(props) {
    let { page, projects } = props 
    let items = []
    let id = page.split(' ').join('')
    let key = 'section' + id
    projects.forEach(item => {
        let uid = item.title.split(' ').join('')
        items.push(<Item title={item.title} imgClass={item.imgClass} p={item.text} link={item.link} list={item.list} key={uid} />)
    })
    return (
        <section key={key} id={id}>
            {items}
        </section>
    )
}