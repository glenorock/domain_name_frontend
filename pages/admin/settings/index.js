import React from "react";
import Page from '../../../components/admin/page';
import { TextField } from "@mui/material";
export default function(){
    return(
        <Page>
            <div className="admin-table">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Param
                            </td>
                            <td>
                                <TextField
                                    fullWidth
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Param
                            </td>
                            <td>
                                <TextField
                                    fullWidth
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Param
                            </td>
                            <td>
                                <TextField
                                    fullWidth
                                />
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </Page>
    )
}