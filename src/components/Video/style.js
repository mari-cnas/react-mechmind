import styled from 'styled-components'

export const VideoContainer = styled.div`
.ratio-4x3 {
  @include media-breakpoint-up(md) {
    --bs-aspect-ratio: 50%; // 2x1
  }
}


`;