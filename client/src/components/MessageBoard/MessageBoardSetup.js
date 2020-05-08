import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { CTX } from './Store';

const useStyles = makeStyles(theme => ({
    root: {
        // padding: theme.spacing(1),
    },
    flex: {
        display: 'flex',
        alignItems: 'center'
    },
    topicWindow: {
        width: '20%',
        height: '300px',
    },
    chatWindow: {
        width: '80%',
        height: '300px',
        padding: '20px'
    },
    chatBox: {
        width: '80%'
    },
    button: {
        marginLeft: '20px',
        width: '15%',
        height: '56px'
    },
    chip: {
        margin: "10px 10px 10px 0px"
    }
}));

function MessageBoardSetup() {
    const classes = useStyles();

    const { allChats, sendChatAction, user } = React.useContext(CTX);

    const topics = Object.keys(allChats);

    const [activeTopic, changeActiveTopic] = React.useState(topics[0]);

    const [textValue, changeTextValue] = React.useState('');

    return (
        <Paper className={classes.root} elevation={0}>
            <h2 className="text-center">{activeTopic}</h2>
            <div className={classes.flex}>
                <div className={classes.topicWindow}>
                    <List>
                        {
                            topics.map(topic => (
                                <ListItem className="border border-body my-2 p-1 text-center"onClick={e => changeActiveTopic(e.target.innerText)} key={topic} button>
                                    <ListItemText primary={topic} />
                                </ListItem>
                            ))
                        }
                    </List>
                </div>
                <div className={classes.chatWindow}>
                    {
                        allChats[activeTopic].map((chat, i) => (
                            <div className={classes.flex} key={i}>
                                <Chip label={chat.from} className={classes.chip} />
                                <Typography variant='body2'>{chat.msg}</Typography>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={classes.flex}>
                <TextField
                    id="outlined-basic"
                    label="Send a Message"
                    variant="outlined"
                    className={classes.chatBox}
                    value={textValue}
                    onChange={e => changeTextValue(e.target.value)}
                />
                <Button
                    variant="contained"
                    className={classes.button}
                    onClick={() => {
                        sendChatAction({ from: user, msg: textValue, topic: activeTopic });
                        changeTextValue('');
                    }}
                >
                    Send
                </Button>
            </div>
        </Paper >
    );
}

export default MessageBoardSetup;