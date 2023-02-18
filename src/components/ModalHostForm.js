import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Host your Service</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography variant="h6" component="h2">
              Host your Services
            </Typography>
            <form>
                <TextField
                sx={{mb: 3}}
                required
                id="title"
                label="Title"
                type="text"
                placeholder="Chef for hire!"
                variant="filled"
                inputProps={{minLength: 2, maxLength: 120, style: {width: 300}}}
              />

              <TextField
                sx={{mb: 3}}
                required
                id="location"
                label="Location"
                type="text"
                placeholder="Cupertino, California"
                variant="filled"
                inputProps={{minLength: 2, maxLength: 120, style: {width: 300}}}
              />

              <br />

              <TextField
                sx={{mb: 3}}
                multiline
                rows={3}
                id="description"
                label="Description"
                type="text"
                placeholder="Local dog walking services in the city of Cupertino."
                variant="filled"
                inputProps={{maxLength: 2000, style: {width: 300}}}
              />

              <br />

              <TextField
              sx={{mb: 1}}
              required
              id="days"
              label="Days"
              type="text"
              placeholder="Oct 2-9"
              variant="filled"
              helperText="Click here for help"
              inputProps={{maxLength: 200, style: {width: 300}}}
              />

              <br />

              <TextField
              sx={{mb: 3}}
              required
              id="price"
              label="Price Range"
              type="text"
              placeholder="$20.00 per hour"
              variant="filled"
              inputProps={{maxLength: 200, style: {width: 300}}}

              />

              <br />

              <TextField
              sx={{mb: 3}}
              required
              multiline
              rows={2}
              id="contact"
              label="Contact"
              type="text"
              placeholder="How can potential clients contact you?"
              variant="filled"
              inputProps={{maxLength: 1000, style: {width: 300}}}

              />

              <br />

              <TextField
                sx={{mb: 3}}
                multiline
                rows={2}
                id="tags"
                label="Tags"
                type="text"
                placeholder="Gig, Transportation, Tutoring"
                variant="filled"
                size="small"
                inputProps={{maxLength: 2000, style: {width: 300}}}
              />

              <br />

              <Button
              type="submit"
              variant="contained">
                Submit
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}