import React from 'react'
import Page from './Page'
import Contact from './Contact'

export default function Main(props) {
    let { projects, bio } = props
    return (
        <main>
            <Page key={bio.id} items={bio.items} page={bio.page}/>
            <Page key={projects.id} items={projects.items} page={projects.page}/>
            <Contact />
        </main>
    )
}