import { Box } from '@mui/material';

const VideoBackground = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0,
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.15)',
          zIndex: 1,
        },
      }}
    >
      <Box
        component="iframe"
        src="https://www.youtube.com/embed/xFQjoJEFnH0?autoplay=1&mute=1&loop=1&playlist=xFQjoJEFnH0&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
        title="Chef cooking background video"
        allow="autoplay; encrypted-media"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '177.77777778vh',
          minWidth: '100vw',
          height: '56.25vw',
          minHeight: '100vh',
          transform: 'translate(-50%, -50%)',
          border: 'none',
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
};

export default VideoBackground;
