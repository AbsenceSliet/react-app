import React from "react";
import highlight from "@/utils/highlight";
import CustomIcon from "@/components/CustomIcon";
import "./index.scss";
const SongItem = (props) => {
  let { item, query } = props;
  let check = false;
  return (
    <li className="songs-item">
      <section className="songs-item__info">
        {check && (
          <div className="info__check">
            <CustomIcon type="uncheck" />
          </div>
        )}
        <div className="info">
          <p className="info__title">
            {query ? highlight(item.name, query) : item.name}
          </p>
          <div className="info__desc">
            <span className="artists">
              {item.artists && item.artists[0].name}
            </span>
            -
            <span className="album">
              {query ? highlight(item.album.name, query) : item.album.name}
            </span>
          </div>
          {item.alias && (
            <div className="info__alias">{item.alias.join("/")}</div>
          )}
        </div>
        {!check && (
          <div className="info__handle">
            <CustomIcon type="info" />
          </div>
        )}
      </section>
    </li>
  );
};
export default SongItem;
