import React, { useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../../Components/Categories/Categories";
import Video from "../../Components/Video/Video";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/video.action";
import SkeletonVideo from "../../Components/skeletons/SkeletonVideo";
import InfiniteScroll from "react-infinite-scroll-component";
import CustomHelmet from "../../Components/CustomHelmet";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );

  const fetchData = () => {
    if (activeCategory === "All") dispatch(getPopularVideos());
    else {
      dispatch(getVideosByCategory(activeCategory));
    }
  };

  return (
    <Container>
      <CustomHelmet />
      <Categories />
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
        className="row"
      >
        {!loading
          ? videos?.map((video, i) => (
              <Col lg={3} md={4} key={i}>
                <Video video={video} />
              </Col>
            ))
          : [...Array(20)].map((_, i) => (
              <Col lg={3} md={4} key={i}>
                <SkeletonVideo />
              </Col>
            ))}
      </InfiniteScroll>
    </Container>
  );
};

export default HomeScreen;
