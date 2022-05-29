import React from 'react'
import Page from './Page'
import Contact from './Contact'

export default function Main(props) {
    let { projects, bio } = props
    return (
        <main>
            <Page key={bio.id} projects={bio.items} page={bio.page}/>
            <Page key={projects.id} projects={projects.items} page={projects.page} />
            <Contact />
        </main>
    )
}