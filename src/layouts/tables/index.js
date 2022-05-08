import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import Placement from "./Placement";
import NonTech from "./NonTech";
import Extra from "./Extra";
import axios from "axios";
import './Placement.css';
import { useState } from "react";
import Add from "./Add";
import MDInputRoot from "components/MDInput/MDInputRoot";
function Tables() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [links, setLinks] = useState([]);
  const onSelect=(subject)=>{
      axios({
        headers:{'Authorization':window.sessionStorage.getItem('token')},
        method:'get',
        url:`http://localhost:8080/users/placementMaterial/${subject}`,
      }).then(res=>{
          setLinks(res.data.map(data=>data.link))
      })
  }
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                 Placement Material
                </MDTypography>
              </MDBox>
                 <Placement onSelect={onSelect}/>
                 <NonTech onSelect={onSelect}/>
                 <Extra onSelect={onSelect}/>
                {
                  links.map((link,index)=>
                    <>
                    <a href={link}  className="deco" target="_blank">Link {index+1}</a><br/>
                    </>

                  )
                }
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                Add the Material
                </MDTypography>
              </MDBox>
                 <Add onSelect={onSelect}/>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
