import { ipcRenderer as ipc } from 'electron'
import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useParamsAccount } from '../hooks/params'

const EditAccount: React.FC = () => {
  const account = useParamsAccount()

  const [label, setLabel] = useState<string>(account.label)

  return (
    <Dialog fullScreen open>
      <DialogTitle>Edit Account</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          label="Label"
          type="text"
          value={label}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setLabel(event.target.value)
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={window.close}>Cancel</Button>
        <Button
          onClick={() => {
            ipc.send('edit-account', { ...account, label })
            window.close()
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditAccount