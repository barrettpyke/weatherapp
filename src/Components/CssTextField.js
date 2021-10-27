import { TextField, styled } from "@mui/material";

const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
    },
});

export default CssTextField


