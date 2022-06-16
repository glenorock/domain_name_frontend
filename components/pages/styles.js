export const ModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: ('undefined' !== typeof screen)?((screen.width > 450)?400:250):(400),
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    maxHeight: "75%",
    overflow: "auto",
};