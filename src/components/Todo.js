import React from 'react';
import { Button } from '@material-ui/core'
import { List, ListItem, ListItemText } from '@material-ui/core';

import db from '../firebase';

const Todo = (props) => {
    return(
        <List key={Date.now()}>
            <ListItem>
                <ListItemText key={props.text.id} primary={props.text.todo} />
                <Button variant='contained' color='primary' 
            onClick={ event => (db.collection('todos').doc(props.text.id).delete())}>Delete</Button>
            </ListItem>
        </List>
    );
}

export default Todo;