import {makeStyles} from '@material-ui/core/styles'
export default makeStyles((theme)=>({
    toolbar: theme.mixins.toolbar,
    emptyButton: {
        [theme.breakpoints.down('xs')]: {
            marginBottom:'5px',
        },
        [theme.breakpoints.up('xs')]:{
            marginRight:'10px',
        },

    }
}))

