import React from "react";

type AdvertCardProps = {
  price: number;
  title: string;
  details: string;
  newChats: number;
  totalChats: number;
  lastUpdated: string;
};

function AdvertCard({
  price,
  title,
  details,
  newChats,
  totalChats,
  lastUpdated,
}: AdvertCardProps) {
  const newChatsStyle = newChats > 0 ? "active" : "";

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
          <p>{lastUpdated.toString()}</p>
        </div>
        <div className="adv-card-price">{price}</div>
        <div className="adv-card-title">{title}</div>
        <div className="adv-card-details">{details}</div>
      </div>
      <button>
        <i className="ri-chat-1-line"></i>
        <p>Chats</p>
        <span className={newChatsStyle}>
          {newChats > 0 ? newChats : totalChats}
        </span>
      </button>
    </div>
  );
}

export default AdvertCard;
