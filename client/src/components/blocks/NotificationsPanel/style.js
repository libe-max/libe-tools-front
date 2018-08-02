import styled from 'styled-components'

const Wrapper = styled.div`
.notifications__notification-slot {
  margin-bottom: ${p => p.theme.units(1)};
  box-shadow: ${p => p.theme.shadows.small};
  overflow: hidden;
  animation-name: fadeIn;
  animation-duration: ${p => p.theme.transitions.medium};
}

.notifications__notification-slot:last-child {
  margin-bottom: unset;
}

.notifications__notification-slot_fadeout {
  animation-name: fadeOut;
}

.notifications__notification-slot_hide {
  display: none;
}

@keyframes fadeIn {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
}`

export default Wrapper
