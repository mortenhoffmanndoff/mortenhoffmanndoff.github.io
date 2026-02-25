// Skip custom cursor on touch/mobile devices
const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || window.matchMedia('(max-width: 1023px)').matches;

if (!isTouchDevice) {

// Custom cursor tracking
document.addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
  document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
});

// Scale cursor on clickable elements
const clickableElements = 'a, button, [role="button"], input, textarea, select';
const videoElements = '.media-player';

// Function to check video state
function updateCursorForVideo(videoTarget) {
  if (videoTarget.classList.contains('is-playing')) {
    document.body.classList.add('cursor-video-playing');
    document.body.classList.remove('cursor-video', 'cursor-hover');
  } else {
    document.body.classList.add('cursor-video');
    document.body.classList.remove('cursor-video-playing', 'cursor-hover');
  }
}

document.addEventListener('mouseover', (e) => {
  const videoTarget = e.target.matches(videoElements) ? e.target : e.target.closest(videoElements);
  
  if (videoTarget) {
    updateCursorForVideo(videoTarget);
  } else if (e.target.matches(clickableElements) || e.target.closest(clickableElements)) {
    document.body.classList.add('cursor-hover');
    document.body.classList.remove('cursor-video', 'cursor-video-playing');
  }
});

// Also update on mousemove to catch state changes while hovering
document.addEventListener('mousemove', (e) => {
  const videoTarget = e.target.matches(videoElements) ? e.target : e.target.closest(videoElements);
  
  if (videoTarget) {
    updateCursorForVideo(videoTarget);

    // Detect if mouse is over the native controls area (bottom ~50px of video)
    const video = videoTarget.querySelector('video');
    if (video) {
      const rect = video.getBoundingClientRect();
      const isInControlsArea = e.clientY > rect.bottom - 75;
      if (isInControlsArea) {
        document.body.classList.add('cursor-controls');
      } else {
        document.body.classList.remove('cursor-controls');
      }
    }
  }
});

document.addEventListener('mouseout', (e) => {
  if (e.target.matches(videoElements) || e.target.closest(videoElements)) {
    document.body.classList.remove('cursor-video', 'cursor-video-playing', 'cursor-controls');
  } else if (e.target.matches(clickableElements) || e.target.closest(clickableElements)) {
    document.body.classList.remove('cursor-hover');
  }
});

// Listen for clicks on video to update cursor state
document.addEventListener('click', (e) => {
  const videoTarget = e.target.matches(videoElements) ? e.target : e.target.closest(videoElements);
  
  if (videoTarget) {
    // Small delay to let Vue update the class
    setTimeout(() => {
      updateCursorForVideo(videoTarget);
    }, 100);
  }
});

// Listen for play/pause events on videos to update cursor immediately
document.addEventListener('play', (e) => {
  if (e.target.tagName === 'VIDEO') {
    const videoTarget = e.target.closest(videoElements);
    if (videoTarget) {
      // Wait a tick for Vue to sync is-playing class
      requestAnimationFrame(() => updateCursorForVideo(videoTarget));
    }
  }
}, true);

document.addEventListener('pause', (e) => {
  if (e.target.tagName === 'VIDEO') {
    const videoTarget = e.target.closest(videoElements);
    if (videoTarget) {
      requestAnimationFrame(() => updateCursorForVideo(videoTarget));
    }
  }
}, true);

} // end if (!isTouchDevice)
