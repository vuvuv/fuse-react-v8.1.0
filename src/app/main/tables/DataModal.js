import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { selectModalOpen, setModalOpen } from 'app/store/tableSlice';
import './Table.css';

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

export default function DataModal() {
  const data = useSelector((state) => state.table.modalData);
  const company = data.currentCompany;

  const dispatch = useDispatch();
  const open = useSelector(selectModalOpen);

  const handleOpen = () => dispatch(setModalOpen(true));
  const handleClose = () => dispatch(setModalOpen(false));

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Current Company
          </Typography>
          <table className="modalDataTable">
            <tbody>
              <tr>
                <td>Id</td>
                <td>{company.id}</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>{company.name}</td>
              </tr>
              <tr>
                <td>Cage</td>
                <td>{company.cage}</td>
              </tr>
              <tr>
                <td>Comment</td>
                <td>{company.comment}</td>
              </tr>
              {company.comType ? (
                <>
                  <tr>
                    <td>Com Type</td>
                    <td>{company.comType.id}</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>{company.comType.name}</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>{company.comType.applicationType}</td>
                  </tr>
                </>
              ) : (
                <td>Com Type</td>
              )}
            </tbody>
          </table>
        </Box>
      </Modal>
    </div>
  );
}
