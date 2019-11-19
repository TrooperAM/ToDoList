import React, {useState} from "react"
import {Checkbox, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {TodoListItem} from "../constants";

export default (props: TodoListItem) => {
    let {id, info, complete} = props;
    const [checked, setChecked] = useState(false);
    const handleToggle = (value: number) => () => {
        setChecked(!checked);
    };
    return (<>
        <ListItem key={id} role={undefined} dense button onClick={handleToggle(id)}>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={complete || checked}
                    tabIndex={-1}
                    disableRipple
                />
            </ListItemIcon>
            <ListItemText primary={info}/>
        </ListItem>
    </>)
}