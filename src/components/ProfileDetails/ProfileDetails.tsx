import React from "react";
import * as C from "./styles";
import { ProfileProps } from "../../pofileProps";
import { BsTwitter } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { HiLink } from "react-icons/hi";

const ProfileDetails = ({
  login,
  name,
  avatar_url,
  created_at,
  bio,
  followers,
  following,
  public_repos,
  location,
  twitter_username,
  blog,
  company,
}: ProfileProps) => {
  return (
    <C.ProfileDetail>
      <img src={avatar_url} alt="profile-img" width="120px" height="120px" />
      <section className="dev-basic-info">
        <div>
          <p>{name}</p>
          <a href="">{login}</a>
        </div>
        <p>{created_at}</p>
      </section>
      <p className="bio">{bio ? bio : "This profile has no bio"}</p>
      <section className="dev-account-info">
        <p>
          <span>Repos</span>
          {public_repos}
        </p>
        <p>
          <span>Followers</span>
          {followers}
        </p>
        <p>
          <span>Following</span>
          {following}
        </p>
      </section>
      <section className="dev-links">
        <div>
          <IoLocation />
          <p>{location}</p>
        </div>
        <div>
          <HiLink />
          <p>{blog ? blog : "Not Available"}</p>
        </div>
        <div>
          <BsTwitter />
          <p>
            <a href="">
              {twitter_username ? twitter_username : "Not Available"}
            </a>
          </p>
        </div>
        <div>
          <HiBuildingOffice2 />
          <p>{!company ? "Not Available" : company}</p>
        </div>
      </section>
    </C.ProfileDetail>
  );
};

export default ProfileDetails;
