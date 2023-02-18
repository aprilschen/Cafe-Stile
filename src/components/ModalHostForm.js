import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { useState } from 'react';

import axios from 'axios';
import qs from 'qs'

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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [days, setDays] = useState("");
  const [price, setPrice] = useState("");
  const [contact, setContact] = useState("");
  const [tags, setTags] = useState("");
  const [images, setImages] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const imageList = images.split(',');
    const info = {
      locationImageList: imageList,
      title: title,
      location: location,
      description: description,
      days: days,
      price: price,
      isNew: true,
      contact: contact,
      tags: tags,
    }

    axios.post("http://127.0.0.1:8000/api/listings", qs.stringify(info))
  }

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
            <form onSubmit = {handleSubmit}>
                <TextField
                sx={{mb: 3}}
                required
                id="title"
                label="Title"
                type="text"
                placeholder="Chef for hire!"
                variant="filled"
                onChange={e => setTitle(e.target.value)}
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
                onChange={e => setLocation(e.target.value)}
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
                onChange={e => setDescription(e.target.value)}
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
              onChange={e => setDays(e.target.value)}
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
              onChange={e => setPrice(e.target.value)}
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
              onChange={e => setContact(e.target.value)}
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
                onChange={e => setTags(e.target.value)}
                inputProps={{maxLength: 2000, style: {width: 300}}}
              />

              <br />

              <TextField
                sx={{mb: 3}}
                multiline
                required
                rows={2}
                id="images"
                label="Images"
                type="text"
                placeholder="https://images.com/photo1432"
                helperText="Enter as comma separated list,"
                variant="filled"
                size="small"
                onChange={e => setImages(e.target.value)}
                inputProps={{maxLength: 2000, style: {width: 300}}}
              />

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