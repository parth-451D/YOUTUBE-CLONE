import React from "react";
import "./_videoMetaData.scss";
import numeral from "numeral";
import moment from "moment";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";

// { video: { snippet, statistics }, videoId }
const VideoMetaData = () => {
  // const { channelId, channelTitle, description, title, publishedAt } = snippet;
  // const { viewCount, likeCount, dislikeCount } = statistics;

  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>horeg</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span className="mr-3">
            {numeral(10000).format("0.a")} Views •
            {moment('2020-9-8').fromNow()}
          </span>
          <div>
            <span className="mr-3">
              <MdThumbUp size={26} />
              {numeral(1000).format("0.a")}
            </span>
            <span>
              <MdThumbDown size={26} />
              {numeral(5000).format("0.a")} 
            </span>
          </div>
        </div>
      </div>

      <div className="videoMetaData__channel d-flex justify-content-between align-item-center my-2 py-3 ">
        <div className="d-flex">
          <img
            src="https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg"
            className="rounder-circle mr-3"
            alt=""
          />
          <div className="d-flex flex-column">
            <span>apna clg</span>
            <span>{numeral(1000).format("0.a")} subscribers</span>
          </div>
        </div>
        <button className="btn border-0 m-2 p-2">subscribe </button>
      </div>

      <div className="videoMetaData__description">
        <ShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false} >
        {/* // > {description} */}
      <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis architecto dignissimos accusamus non porro dolor omnis aperiam, incidunt modi mollitia voluptates odio ut. Iusto exercitationem repellendus corporis, accusantium error quis vel quos nemo minima distinctio eius aperiam neque aut a.</p>
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
