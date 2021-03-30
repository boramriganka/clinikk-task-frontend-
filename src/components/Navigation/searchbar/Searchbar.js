// imports
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import styled from 'styled-components'
// render
const Container = styled.div`
  width: 300px;
  height: 40px;
  margin: 0 1rem;
  background-color: #e5e5e7;
  border-radius: 8px;
  @media (max-width: 768px) {
    width: 200px;
    padding:0;
    height: 40px;
  }
`;
function Searchbar(){
    return(
        <Container>
        <TextField
  id ="standerd-bare"
  defaultValue=""
  margin="30px"
  borderBottom="none"
  InputProps={{
      disableUnderline: true,
    endAdornment: (
      <InputAdornment style={{position: 'absolute', left: 5, top: 10, width: 20, height: 20}}>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </InputAdornment>
    )
  }}
/>
        </Container>
    );
}
export default Searchbar