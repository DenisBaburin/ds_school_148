import { Delete } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import useUsers from "../hooks/users";
import { UserProps } from "./UsersTableBody";

interface UserMenuProps {
  onDelete: (index: number) => void;
}

export default function CustomizedMenus(
  { index }: UserProps,
  {}: UserMenuProps
) {
  const { users, setUsers } = useUsers();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseDelete = (index: number) => {
    users.splice(index, 1);
    setUsers(users);
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton id="demo-customized-button" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={() => handleCloseDelete(index)} disableRipple>
          <Delete />
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
}
