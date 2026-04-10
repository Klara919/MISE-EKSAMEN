import React from "react";
import styles from "./TeamCard.module.css";

export default function TeamCard({
  image,
  imageAlt,
  quote,
  role,
  name,
  linkedinUrl,
  email,
}) {
  return (
    <article className={styles.teamCard}>
      <div className={styles.teamCardImageWrapper}>
        <img
          src={image}
          alt={imageAlt || name}
          className={styles.teamCardImage}
        />

        <div className={styles.teamCardOverlay}>
          <p className={styles.teamCardQuote}>“{quote}”</p>
        </div>
      </div>

      <div className={styles.teamCardContent}>
        <h3 className={styles.teamCardRole}>{role}</h3>
        <p className={styles.teamCardName}>{name}</p>

        <div className={styles.teamCardActions}>
          <a
            href={linkedinUrl}
            className={`${styles.teamCardIconLink} ${styles.teamCardIconLinkText}`}
            target="_blank"
            rel="noreferrer"
            aria-label={`${name} på LinkedIn`}
          >
            In
          </a>

          <a
            href={`mailto:${email}`}
            className={styles.teamCardIconLink}
            aria-label={`Send email til ${name}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={styles.teamCardIcon}
              aria-hidden="true"
            >
              <path
                d="M4 6h16v12H4z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M4 6l8 6 8-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}