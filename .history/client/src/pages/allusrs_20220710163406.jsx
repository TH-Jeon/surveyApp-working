import {Table, TableBody, TableRow, TableHead, TableCell} from "@mui/material";
const llUsers = ()=>{

    return(
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>name</TableCell>
                    <TableCell>phone</TableCell>
                    <TableCell>email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            </TableBody>
        </Table>

    )
}
export default allUsers;