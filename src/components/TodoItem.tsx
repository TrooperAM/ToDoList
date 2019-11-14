import React, {useState} from "react"
import {Checkbox, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {TodoListItem} from "../constants";

export default (props: TodoListItem) => {
    let {id, info, complete} = props;
    let arr: number[] = [];
    const [checked, setChecked] = useState(arr);
    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    return (<>
        <ListItem key={id} role={undefined} dense button onClick={handleToggle(id)}>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={complete || checked.indexOf(id) !== -1}
                    tabIndex={-1}
                    disableRipple
                />
            </ListItemIcon>
            <ListItemText primary={info}/>
        </ListItem>
    </>)
}