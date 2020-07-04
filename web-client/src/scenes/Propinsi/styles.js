const styles = theme => ({
    root: {
        display: 'flex,'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: theme.spacing(2),
    },

    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',

    },

    reloads: {
        display: "flex",
        justifyContent: 'flex-end',
        padding: theme.spacing(2),

    }


});

export default styles;