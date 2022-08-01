import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import PaletteIcon from '@mui/icons-material/Palette';
import { changeColor } from '../../srevices/DataService';

export default function ColorPopper(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const colorArray = ['#e2725b', '#ffae42', '#fefe33', '#77dd77', '#40e0d0', '#a4dded', '#77b5fe', '#ba55d3', '#ffb3de', '#c19a6b', '#d3d3d3']

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    const takeColor = (color) => {
        if (props.action === 'create') {
            props.listenToColorPopper(color)
        }
        else if (props.action === 'update') {
            let obj = {
                noteIdList: [props.id],
                color: color

            }
            changeColor(obj).then((resp) => { console.log(resp); props.listenToColorUpdate() })
                .catch((error) => { console.log(error) })
        }
        /*props.listenToColorPopper(color)*/
    }

    return (
        <div>

            <PaletteIcon onClick={handleClick} />

            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', display: 'flex' }}>
                    {colorArray.map(color => (
                        <div onClick={() => takeColor(color)} style={{ backgroundColor: color, height: '30px', width: '30px', borderRadius: '100px', marginLeft: '5px' }}>

                        </div>))}
                </Box>
            </Popper>
        </div>
    );
}