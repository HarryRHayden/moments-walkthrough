import React from 'react'
import { Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Avatar } from '../../components/Avatar';
import styles from "../../styles.Comment.module.css";

export const Comment = (props) => {
    const {
        owner,
        profile_id,
        profile_image,
        likes_count,
        content,
        updated_at
    } = props;

  return (
    <div>
        <hr />
        <Media>
            <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} />
            </Link>
            <Media.Body>
                <span className={styles.Owner}>
                    {owner}
                </span>
                <span className={styles.Date}>
                    {updated_at}
                </span>
                <p>
                    {content}
                </p>
            </Media.Body>
        </Media>
    </div>
  );
};