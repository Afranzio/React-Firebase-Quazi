import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core'

const Todo = (props) => {
    return(
        <List>
            <ListItem>
                <ListItemText primary={props.text} />
            </ListItem>
        </List>
    );
}

export default Todo;