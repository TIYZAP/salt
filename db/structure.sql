--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.4
-- Dumped by pg_dump version 9.5.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: ar_internal_metadata; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE ar_internal_metadata (
    key character varying NOT NULL,
    value character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: follows; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE follows (
    id integer NOT NULL,
    follower_type character varying,
    follower_id integer,
    followable_type character varying,
    followable_id integer,
    created_at timestamp without time zone
);


--
-- Name: follows_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE follows_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: follows_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE follows_id_seq OWNED BY follows.id;


--
-- Name: likes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE likes (
    id integer NOT NULL,
    liker_type character varying,
    liker_id integer,
    likeable_type character varying,
    likeable_id integer,
    created_at timestamp without time zone
);


--
-- Name: likes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE likes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: likes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE likes_id_seq OWNED BY likes.id;


--
-- Name: mentions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE mentions (
    id integer NOT NULL,
    mentioner_type character varying,
    mentioner_id integer,
    mentionable_type character varying,
    mentionable_id integer,
    created_at timestamp without time zone
);


--
-- Name: mentions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE mentions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: mentions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE mentions_id_seq OWNED BY mentions.id;


--
-- Name: refile_attachments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE refile_attachments (
    id integer NOT NULL,
    oid oid NOT NULL,
    namespace character varying NOT NULL,
    created_at timestamp without time zone DEFAULT ('now'::text)::timestamp without time zone
);


--
-- Name: refile_attachments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE refile_attachments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: refile_attachments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE refile_attachments_id_seq OWNED BY refile_attachments.id;


--
-- Name: reviews; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE reviews (
    id integer NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    rating integer,
    body text,
    dish character varying,
    place_id character varying,
    venue_name character varying,
    venue_address character varying,
    user_id integer,
    image_id character varying
);


--
-- Name: reviews_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE reviews_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: reviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE reviews_id_seq OWNED BY reviews.id;


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE schema_migrations (
    version character varying NOT NULL
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE users (
    id integer NOT NULL,
    email character varying DEFAULT ''::character varying NOT NULL,
    encrypted_password character varying DEFAULT ''::character varying NOT NULL,
    reset_password_token character varying,
    reset_password_sent_at timestamp without time zone,
    remember_created_at timestamp without time zone,
    sign_in_count integer DEFAULT 0 NOT NULL,
    current_sign_in_at timestamp without time zone,
    last_sign_in_at timestamp without time zone,
    current_sign_in_ip character varying,
    last_sign_in_ip character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    provider character varying,
    uid character varying,
    name character varying,
    image_id character varying,
    fb_token character varying,
    fb_id character varying,
    authentication_token character varying(30)
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE users_id_seq OWNED BY users.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY follows ALTER COLUMN id SET DEFAULT nextval('follows_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY likes ALTER COLUMN id SET DEFAULT nextval('likes_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY mentions ALTER COLUMN id SET DEFAULT nextval('mentions_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY refile_attachments ALTER COLUMN id SET DEFAULT nextval('refile_attachments_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY reviews ALTER COLUMN id SET DEFAULT nextval('reviews_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


--
-- Name: ar_internal_metadata_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY ar_internal_metadata
    ADD CONSTRAINT ar_internal_metadata_pkey PRIMARY KEY (key);


--
-- Name: follows_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY follows
    ADD CONSTRAINT follows_pkey PRIMARY KEY (id);


--
-- Name: likes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY likes
    ADD CONSTRAINT likes_pkey PRIMARY KEY (id);


--
-- Name: mentions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY mentions
    ADD CONSTRAINT mentions_pkey PRIMARY KEY (id);


--
-- Name: refile_attachments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY refile_attachments
    ADD CONSTRAINT refile_attachments_pkey PRIMARY KEY (id);


--
-- Name: reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: fk_followables; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX fk_followables ON follows USING btree (followable_id, followable_type);


--
-- Name: fk_follows; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX fk_follows ON follows USING btree (follower_id, follower_type);


--
-- Name: fk_likeables; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX fk_likeables ON likes USING btree (likeable_id, likeable_type);


--
-- Name: fk_likes; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX fk_likes ON likes USING btree (liker_id, liker_type);


--
-- Name: fk_mentionables; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX fk_mentionables ON mentions USING btree (mentionable_id, mentionable_type);


--
-- Name: fk_mentions; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX fk_mentions ON mentions USING btree (mentioner_id, mentioner_type);


--
-- Name: index_refile_attachments_on_namespace; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_refile_attachments_on_namespace ON refile_attachments USING btree (namespace);


--
-- Name: index_refile_attachments_on_oid; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_refile_attachments_on_oid ON refile_attachments USING btree (oid);


--
-- Name: index_reviews_on_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_reviews_on_user_id ON reviews USING btree (user_id);


--
-- Name: index_users_on_authentication_token; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_users_on_authentication_token ON users USING btree (authentication_token);


--
-- Name: index_users_on_email; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_users_on_email ON users USING btree (email);


--
-- Name: index_users_on_reset_password_token; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_users_on_reset_password_token ON users USING btree (reset_password_token);


--
-- PostgreSQL database dump complete
--

SET search_path TO "$user", public;

INSERT INTO schema_migrations (version) VALUES ('20161128030940'), ('20161128030941'), ('20161128030942'), ('20161128171540'), ('20161128172752'), ('20161128184058'), ('20161128205034'), ('20161129161858'), ('20161129162231'), ('20161130180107'), ('20161130184930'), ('20161201142147'), ('20161202144944');


