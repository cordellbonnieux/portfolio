import Item from './Item'

const kitty = 'https://getwallpapers.com/wallpaper/full/1/0/c/1344537-kitty-cat-wallpaper-1920x1280-meizu.jpg'

export default function Page(props) {
    let content
    if (props.section == 'bio') {
        content = <Item img={kitty} title='example'/>
    } else if (props.section == 'projects') {

    } else if (props.section == 'contact') {

    }
    return (
        <section id={props.section}>
            {content}
        </section>
    )
}