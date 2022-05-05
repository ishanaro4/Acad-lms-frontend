/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Notifications() {
  const alertContent = () => (
    <MDTypography variant="body2" color="white">
      Todays Leetcode chalange left
      <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        an example link
      </MDTypography>
    </MDTypography>
  );
  const alertContent2 = () => (
    <MDTypography variant="body2" color="white">
      Weekly Challange 26 InterviewBit
      <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        Click to register
      </MDTypography>
    </MDTypography>
  );
  const alertContent3 = () => (
    <MDTypography variant="body2" color="white">
      Code Forces Contest 312
      <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        Enter To Participate
      </MDTypography>
    </MDTypography>
  );
  const alertContent4 = () => (
    <MDTypography variant="body2" color="white">
      New Amazon Interview Experience
      <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        See the Experience
      </MDTypography>
    </MDTypography>
  );
  const alertContent5 = () => (
    <MDTypography variant="body2" color="white">
      Solve Todays Question to Get Points
      <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        Todays Question
      </MDTypography>
    </MDTypography>
  );
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2}>
                <MDTypography variant="h5">Alerts</MDTypography>
              </MDBox>
              <MDBox pt={2} px={2}>
                <MDAlert color="dark" dismissible>
                  {alertContent("dark")}
                </MDAlert>
                <MDAlert color="primary" dismissible>
                  {alertContent2("primary")}
                </MDAlert>
                <MDAlert color="secondary" dismissible>
                  {alertContent3("secondary")}
                </MDAlert>
                <MDAlert color="success" dismissible>
                  {alertContent4("success")}
                </MDAlert>
                <MDAlert color="error" dismissible>
                  {alertContent5("error")}
                </MDAlert>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Notifications;
