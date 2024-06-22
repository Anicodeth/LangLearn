"use client";
import { useMutation, useQuery } from "react-query";
import { getUsers, deleteUser, updateUser } from "@/service/userService";
import { toast } from "sonner";
import { Hourglass } from "react-loader-spinner";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function ManageUsers() {
  const { data, isLoading, error } = useQuery("users", getUsers, {
    onSuccess: () => toast.success("Users fetched successfully"),
    onError: () => toast.error("Failed to fetch users"),
  });

  if (isLoading) {
    return <Hourglass />;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Manage Users</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Full Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Password</TableCell>
              <TableCell align="right">Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((user: any) => (
              <TableRow
                key={user._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user._id}
                </TableCell>
                <TableCell align="right">{user.name}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.password}</TableCell>
                <TableCell align="right">{user.role}</TableCell>
                <TableCell align="right">
                  <Button>Edit</Button>
                  <DeleteUserDialog user={user} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

function DeleteUserDialog({ user }: { user: any }) {
  const deleteUserMutation = useMutation(() => deleteUser(user._id as string), {
    onSuccess: () => {
      toast.success("User deleted successfully");
    },
    onError: () => {
      toast.error("Failed to delete user");
    },
  });
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="destructive">Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete User</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this user?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={() => deleteUserMutation.mutateAsync()}
            variant="destructive"
          >
            {deleteUserMutation.isLoading ? "Deleting..." : "Delete"}
          </Button>
          <Button>Cancel</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
