import React from 'react'
import { Button, Box, Modal, Typography, Stack } from '@mui/material'
import '../../assets/css/forms/form.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

const AppModal = props => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <div>
      <Button onClick={handleOpen}>View Full Application</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Name:
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Enrollment Number: <br />
            Email Id: <br />
            Department/Centre: <br />
            Branch: <br />
            Date Applied: <br />
            Status: <br />
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 10, md: 10 }}
            justifyContent='center'
          >
            <Button variant='outlined' color='success' onClick={handleClose}>
              Approve
            </Button>
            <Button variant='outlined' color='error' onClick={handleClose}>
              Reject
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  )
}
export default AppModal
