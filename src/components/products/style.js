import {makeStyles} from '@material-ui/core/styles'
export default makeStyles((theme)=>({
    mainContent:{
        padding:theme.spacing(3),
      },
      toolbar:theme.mixins.toolbar,
    root: {
        maxWidth:'100%',
    },
    media:{
        width:'100%',
        height:'150px',
        maxHeight:'150px',
    },
    cardActions:{
        display:'flex',
        justifyContent:'flex-end'
    },
    cardContent:{
        display:'flex',
        justifyContent:'space-between',
    },
    
    
}))