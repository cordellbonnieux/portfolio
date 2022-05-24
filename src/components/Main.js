import React from 'react'
import Page from './Page'
// add other pages to this

export default function Main(props) {
    let [ projects ] = [ props ]
    return (
        <main>
            <Page key={projects.id} items={projects.projects.items} page={projects.projects.page}/>
        </main>
    )
}