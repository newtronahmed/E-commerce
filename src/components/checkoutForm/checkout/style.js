import {makeStyles} from '@material-ui/core/styles'
export default makeStyles((theme)=>(
    {
        toolbar: theme.mixins.toolbar,
        paper: {
            marginTop: theme.spacing(3),
            [theme.breakpoints.up('md')]: {
                width:'50%',
                
            },
            [theme.breakpoints.down('sm')]:{
                width:'100%',
            }
        }
    }
))