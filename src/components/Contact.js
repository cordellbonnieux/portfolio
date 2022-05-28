import React, { useState } from "react";

export default function Contact() {
    const form = (
        // TODO: add async
        <form action="https://formsubmit.co/54f77a69e8f5e4acf36b897045cb37f6" method="POST">
            <div>
                <label htmlFor="name">name:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div>
                <label htmlFor="email">email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div>
                <textarea name="message" required ></textarea>
            </div>
            <div>
                <input type="submit" value="send"></input>
            </div>
        </form>
    )

    const confirmation = (
        <div>
            <h5>Your email has been sent, thanks for getting in touch.</h5>
            <button onClick={resetForm}>reset contact form</button>
        </div>
    )

    const [ output, setOutput ] = useState(form)

    function submitForm(e) {
        // TODO: add async
        //e.preventDefault()
        setOutput(confirmation)
    }

    function resetForm() {
        setOutput(form)
    }

    return (
        <section id="contact">
            {output}
        </section>
    )
}