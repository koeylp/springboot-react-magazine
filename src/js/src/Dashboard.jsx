import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BannerNewsList from "./banner/BannerNewsList";
import NavbarAdmin from "./navigation/NavbarAdmin";

export default function Dashboard() {
  const [magazines, setMagazines] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    loadMagazines();
  }, []);

  const loadMagazines = async () => {
    const result = await axios.get("http://localhost:8080/bibon/home");
    setMagazines(result.data);
  };

  const deleteNew = async (id) => {
    await axios.delete(`http://localhost:8080/bibon/dashboard/delete/${id}`);
    loadMagazines();
  };

  const loadMore = () => {
    setItemsPerPage(itemsPerPage + 6);
  };

  return (
    <div>
      <NavbarAdmin />
      <BannerNewsList />
      <div className="dashboard">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {magazines.slice(0, itemsPerPage).map((magazine) => (
                <TableRow key={magazine.id}>
                  <TableCell component="th" scope="row">
                    {magazine.id}
                  </TableCell>
                  <TableCell>{magazine.title}</TableCell>
                  <TableCell>{magazine.img}</TableCell>
                  <TableCell>{magazine.date}</TableCell>
                  <TableCell>
                    <Link to={`/update/${magazine.id}`}>
                      <Button>
                        <EditIcon />
                      </Button>
                    </Link>
                    <Button>
                      <DeleteIcon
                        style={{ color: "red" }}
                        onClick={() => deleteNew(magazine.id)}
                      />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {magazines?.length > itemsPerPage ? (
            <Button onClick={() => loadMore()}>
              <span>LOAD MORE</span>
            </Button>
          ) : (
            <div id="empty"></div>
          )}
        </TableContainer>
      </div>
    </div>
  );
}
