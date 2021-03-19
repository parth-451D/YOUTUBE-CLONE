import React , {useEffect} from "react";
import "./_watchScreen.scss";
import { Col, Row } from "react-bootstrap";
import VideoMetaData from "../../Components/VideoMetaData/VideoMetaData";
import Comments from "../../Components/comments/Comments";
import VideoHorizontal from "../../Components/videoHorizontal/VideoHorizontal";
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getVideoById } from "../../redux/actions/video.action";



const WatchScreen = () => {

  const{id} = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(getVideoById(id))

    //  dispatch(getRelatedVideos(id))
  }, [dispatch, id])

  const {video, loading} = useSelector(state => state.selectedVideo)

  return (
    <Row>
      <Col lg={8}>

        <div className="watchScreen__player">
          <iframe
            width="100%"
            height="100%"
            src={'https://www.youtube.com/embed/?v=8fQyLW7slCo&list=PLQKg8mIgoxKraMfKckMux0tLJfQEivnKv&index=11'}
            title={video?.snippet?.title}
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </div>

        {
            !loading ? <VideoMetaData video={video} videoId={id} /> : <h6>laoding</h6>
        }


        <Comments />

      </Col>
      <Col lg={4}>

      {
          [...Array(10)].map(()=> <VideoHorizontal/>)
      }

      </Col>
    </Row>
  );
};

export default WatchScreen;
