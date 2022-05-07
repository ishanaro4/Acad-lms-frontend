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
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

function Overview() {
  const [username,setUsername] = useState('')
  const [mobile,setMobile] = useState('')
  const [description,setDescription] = useState('')
  const [password, setPassword] = useState('');
  const [id,setId] = useState('')
  useEffect(()=>{
    axios({
      headers:{'Authorization':window.sessionStorage.getItem('token')},
      method:'get',
      url:'http://localhost:8080/users/profile',
    }).then(res=>{
      const data = res.data;

      setUsername(data.username);
      setMobile(data.mobile);
      setDescription(data.description);
      setPassword(data.password);
      setId(data.id);
    })
  },[])

  const editDetails = ()=>{
      window.alert("SENT")
      axios({
        headers:{'Authorization':window.sessionStorage.getItem('token')},
        method:'put',
        url:'http://localhost:8080/users/profile',
        data:{
          username,
          password,
          id,
          mobile,
          description
        }
      }).then(res=>{
      })
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header username={username}>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={20} md={20} xl={9} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard
                title="profile information"
                description={
                  <>
                    <MDInput multiline label="profile info" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                    <MDButton onClick={editDetails}>Update</MDButton>
                  </>
                }
                info={{
                  userName: username,
                  mobile: mobile,
                  location: "Bengaluru",
                }}
                social={[
                  {
                    link: "https://www.facebook.com/CreativeTim/",
                    icon: <FacebookIcon />,
                    color: "facebook",
                  },
                  {
                    link: "https://twitter.com/creativetim",
                    icon: <TwitterIcon />,
                    color: "twitter",
                  },
                  {
                    link: "https://www.instagram.com/creativetimofficial/",
                    icon: <InstagramIcon />,
                    color: "instagram",
                  },
                ]}
                action={{ route: "", tooltip: "Update Profile" }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={2} px={2} lineHeight={1.25}>
          <MDTypography variant="h6" fontWeight="medium">
            Projects
          </MDTypography>
          <MDBox mb={1}>
            <MDTypography variant="button" color="text">
              Architects design houses
            </MDTypography>
          </MDBox>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
