import "@/public/css/main.css";

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <div className ="container-main">
      <div className="banner">
        <Container >
          <Box sx={{ display: 'flex' }}>
            <Box className="banner-container" sx={{ flex: 5, gap:0 }}>
              <Box className="banner_text_box">
                <Box>
                  <h1 className="banner_main_text" >
                    데이터베이스 설계의<br/>
                    새로운 기준
                  </h1>
                </Box>
                <Box>
                  <h6 className="banner_sub_text" >
                    ERD Maker와 함께 더 쉽고 빠르게<br/>데이터베이스를 설계하고 협업하세요
                  </h6>
                </Box>
              </Box>
              <Box className="banner_button_box">
                <Button className="banner_btn" variant="contained" sx={{bgcolor: "#10b981", paddingTop:"15px", paddingBottom:"15px", paddingLeft:"40px", paddingRight:"40px", fontSize:"17px" }} >무료로 시작하기</Button>
              </Box>
            </Box>
            <Box className="banner-container" sx={{ flex: 5 }}>
              <Box className="banner_img_box" >
                <img className="banner_img " src="/img/main_banner.jpg" />
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
}
