import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import CustomHelmet from "../../Components/CustomHelmet";
import VideoHorizontal from "../../Components/videoHorizontal/VideoHorizontal";
import { getSubscribedChannels } from "../../redux/actions/video.action";

const SubscriptionsScreen = () => {
  const { loading, videos } = useSelector(
    (state) => state.subscriptionsChannel
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubscribedChannels());
  }, [dispatch]);

  return (
    <Container fluid>
      <CustomHelmet />
      {!loading ? (
        videos?.map((video) => (
          <VideoHorizontal video={video} key={video.id} subScreen />
        ))
      ) : (
        <SkeletonTheme color="#343a40" highlightColor="#3c4147">
          <Skeleton width="100%" height="160px" count={20} />
        </SkeletonTheme>
      )}
    </Container>
  );
};

export default SubscriptionsScreen;
