"use client";

import { useQuery } from "react-query";
import { getUsers } from "@/service/userService";
import { Hourglass } from "react-loader-spinner";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function PeersPage() {
  const { data: peers, isLoading, error } = useQuery("peers", getUsers);

  if (isLoading) {
    return <Hourglass />;
  }

  if (error) {
    return <div>Error</div>;
  }

  //sort by coin
  peers.sort((a: any, b: any) => {
    return b.coins - a.coins;
  });
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mt-16 sm:mt-0">
        World Lang Learn Ranking
      </h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Full Name</TableCell>
              <TableCell align="right">Coins</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {peers.map((user: any) => (
              <TableRow
                key={user._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{user.name}</TableCell>
                <TableCell align="right">{user.coins}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
