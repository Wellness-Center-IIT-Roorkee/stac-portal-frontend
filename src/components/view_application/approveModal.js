import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, Link, Stack } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import {
  getApplicationDetail,
  updateApplicationStatus,
} from '../../actions/applicationActions';
import '../../assets/css/forms/form.css';
import { formMap } from '../../constants/formMap';
import SplitButton from './splitBtn';
import { isInclude } from '../../helpers/helperFunctions';

const AppModal = ({ applicationID }) => {
  const [open, setOpen] = useState(false);
  const [openMultiple, setOpenMultiple] = useState(false);
  const [remarks, setRemarks] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const applicationDetail = useSelector(
    (state) => state.application.applicationDetail
  );
  const isPhD=isInclude(applicationDetail?.student?.branch,'phd');
  const role = useSelector((state) => state.user.userData?.role);
  const formFields = (role==='admin'&&(applicationDetail?.admin_approval_status==='rej'||applicationDetail?.admin_approval_status==='inc')?[...formMap(applicationDetail) , {
    displayName: 'Remarks',
    value: applicationDetail?.remarks,
    type: 'text'
  }] :formMap(applicationDetail));

  useEffect(() => {
    if (open) {
      dispatch(getApplicationDetail(applicationID));
      return;
    }
  }, [open, applicationID]);

  const changeStatus = (status) => {
    dispatch(
      updateApplicationStatus({
        id: applicationID,
        ...{ status: status, remarks: remarks },
      })
    );
    handleClose();
  };
  return (
    <div>
      <Button onClick={handleOpen}>View Application</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiPaper-root': { width: '40%', minWidth: 300, overflow: 'auto' },
        }}
      >
        <DialogTitle>
          Application
          <IconButton
            aria-label='close'
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {formFields.filter((x)=>{
              if(!isPhD&&(x.displayName==="Supervisor Email"||x.displayName==="HOD Email")){
                return null;
              }
              return x;
            }).map((field, index) => (
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
                    field.choices.find((choice) => choice.value === field.value)
                      ?.displayName
                  ) : field.type === 'multiple'?(
                    <Link style={{cursor:'pointer'}} onClick={()=>setOpenMultiple(!openMultiple)}>
                      View {field.displayName}
                      {
                        openMultiple &&
                        <div onClick={()=>{setOpen(true);setOpenMultiple(true)}} className='multipleModal'>
                          <div className='multipleModalChild'>
                            <CloseIcon onClick={()=>setOpenMultiple(false)} className='multipleModalClose' />
                            {
                              field?.value ?
                              field?.value?.map((item,i)=>{
                                return(
                                  <Link className='multipleModalLink' href={item} target='_blank' rel='noreferer'>
                                    View document {i+1}
                                  </Link>
                                )
                              }):<div>No Relevent Document</div>
                            }
                          </div>
                        </div>
                      }
                    </Link>
                  ) :
                  (
                    field.value
                  )}
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          {role === 'admin' ? (
            <>
              <TextField
                autoFocus
                margin='dense'
                id='remark'
                fullWidth
                placeholder='Leave a comment'
                onChange={(e) => setRemarks(e.target.value)}
              />

              <SplitButton changeStatus={changeStatus} />
            </>
          ) : (
            <>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 2 }}
                sx={{ margin: '2rem' }}
              >
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
              </Stack>
            </>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default AppModal;
