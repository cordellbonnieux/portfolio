import Item from './Item'

export default function Page(props) {
    let [ page ] = [ props ] 
    let items = []
    let id = page.page.split(' ').join('')
    let key = 'section' + id
    page.items.forEach(item => {
        let uid = item.title.split(' ').join('')
        items.push(<Item img={item.image} title={item.title} p={item.text} link={item.link} list={item.list} key={uid} />)
    })
    return (
        <section key={key} id={id}>
            {items}
        </section>
    )
}