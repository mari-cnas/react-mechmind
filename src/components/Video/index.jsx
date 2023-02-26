import { VideoContainer } from './style';

const Video = () =>  (

<VideoContainer className="ratio ratio-16x9">
<iframe src="https://www.youtube.com/embed/oUPaJxk6TZ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</VideoContainer>

);    
    
export default Video;