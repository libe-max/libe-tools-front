import styled from 'styled-components'

const Wrapper = styled.div`
.notifications-panel__notification-slot {
  position: relative;
  margin-bottom: ${p => p.theme.units(1)};
  box-shadow: ${p => p.theme.shadows.small};
  overflow: hidden;
  animation-name: fadeIn;
  animation-duration: ${p => p.theme.transitions.medium};
}

.notifications-panel__notification-slot:last-child {
  margin-bottom: unset;
}

.notifications-panel__hide-notification-slot {
  position: absolute;
  right: ${p => p.theme.units(1)};
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
}

.notifications-panel__notification-slot_fadeout {
  animation-name: fadeOut;
}

.notifications-panel__notification-slot_hide {
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
