import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Grid, Link } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import {
  getApplicationDetail,
  updateApplicationStatus
} from '../../actions/applicationActions'
import '../../assets/css/forms/form.css'
import { formMap } from '../../constants/formMap'

const AppModal = ({ applicationID }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const dispatch = useDispatch()
  const applicationDetail = useSelector(
    state => state.application.applicationDetail
  )
  const formFields = formMap(applicationDetail)

  useEffect(() => {
    if (open) {
      dispatch(getApplicationDetail(applicationID))
      return
    }
  }, [open, applicationID])

  const changeStatus = (status,remarks) => {
    dispatch(updateApplicationStatus({ id: applicationID, ...{status:status, remarks:remarks} }))
    handleClose()
  }

  return (
    <div>
      <Button onClick={handleOpen}>View Application</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiPaper-root': { width: '40%', minWidth: 300, overflow: 'auto' }
        }}
      >
        <DialogTitle>Application</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {formFields.map((field, index) => (
              <React.Fragment key={index}>
                <Grid item xs={5} style={{ fontWeight: 600 }}>
                  {field.displayName}:
                </Grid>
                <Grid item xs={7}>
                  {field.type === 'file' ? (
                    <Link href={field.value} target='_blank' rel='noreferer'>
                      View {field.displayName}
                    </Link>
                  ) : field.type === 'choice' ? (
                    field.choices.find(choice => choice.value === field.value)
                      ?.displayName
                  ) : (
                    field.value
                  )}
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            variant='outlined'
            color='success'
            onClick={() => changeStatus('app')}
          >
            Approve
          </Button>
          <Button
            variant='outlined'
            color='error'
            onClick={() => changeStatus('rej')}
          >
            Reject
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default AppModal
