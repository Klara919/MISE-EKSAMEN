import React from "react";
import "./TeamCard.css";

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
    <article className="team-card">
      <div className="team-card__image-wrapper">
        <img
          src={image}
          alt={imageAlt || name}
          className="team-card__image"
        />

        <div className="team-card__overlay">
          <p className="team-card__quote">“{quote}”</p>
        </div>
      </div>

      <div className="team-card__content">
        <h3 className="team-card__role">{role}</h3>
        <p className="team-card__name">{name}</p>

        <div className="team-card__actions">
          <a
            href={linkedinUrl}
            className="team-card__icon-link team-card__icon-link--text"
            target="_blank"
            rel="noreferrer"
            aria-label={`${name} på LinkedIn`}
          >
            In
          </a>

          <a
            href={`mailto:${email}`}
            className="team-card__icon-link"
            aria-label={`Send email til ${name}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="team-card__icon"
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