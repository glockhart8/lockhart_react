import { Button, TextField } from "@material-ui/core";
import React from "react";

const Contact = () => {
    return (
        <form>
            <TextField label="Full Name" autocomplete="none" />
            <TextField label="Email" autocomplete="none" />
            <TextField label="Message" multiline rows={5} autocomplete="none"/>
            <Button type="submit">Submit</Button>
        </form>
    );
}

export default Contact;