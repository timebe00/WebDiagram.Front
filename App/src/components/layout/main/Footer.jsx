import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 10,
        py: 4,
        borderTop: '1px solid #e5e7eb',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 0,
        }}
      >
        {/* 왼쪽 */}
        <Typography variant="body2" color="text.secondary">
          © 2026 Your Company. All rights reserved.
        </Typography>

        {/* 오른쪽 */}
        <Typography variant="body2" color="text.secondary">
          개인정보처리방침 · 이용약관
        </Typography>
      </Container>
    </Box>
  );
}
