import React from "react";
import "./advert-card.css";

function AdvertCard(props) {
  const newChatsStyle = props.newChats > 0 ? "active" : "";
  return (
    <div className="adv-card">
      <img
        src="https://picsum.photos/300/200"
        alt="Preview"
        className="adv-card-preview"
      />
      <div className="adv-card-content">
        <div className="add-card-updated">
          <p>Last updated</p>
          <p>{props.lastUpdated}</p>
        </div>
        <div className="adv-card-price">{props.price}</div>
        <div className="adv-card-title">{props.title}</div>
        <div className="adv-card-details">{props.details}</div>
      </div>
      <button>
        <i className="ri-chat-1-line"></i>
        <p>Chats</p>
        <span className={newChatsStyle}>
          {props.newChats > 0 ? props.newChats : props.totalChats}
        </span>
      </button>
    </div>
  );
}

export default AdvertCard;
