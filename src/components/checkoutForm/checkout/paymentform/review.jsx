import React from 'react'
import {Typography,List, ListItem, ListItemText} from '@material-ui/core'
import {useSelector} from 'react-redux'

const Review = () => {
    const token = useSelector(state=>state.shipping.token)
    return (
        <div>
            <Typography variant='h6'  gutterBottom  align='center' >Order Summary</Typography>
            <List disablePadding>
                {
                    token.live.line_items.map(each=>{
                       return ( <ListItem>
                            <ListItemText primary={each.name} secondary={`Quantity ${each.quantity}`}></ListItemText>
                            <Typography variant='body2'>{each.line_total.formatted_with_symbol}</Typography>
                        </ListItem>)
                    })
                }
                <ListItem>
                    <ListItemText primary='Total' className='p-3' ></ListItemText>
                    <Typography variant='subtitle1' className='font-bold'>{token.live.subtotal.formatted_with_symbol}</Typography>
                </ListItem>
            </List>
        </div>
    )
}

export default Review
