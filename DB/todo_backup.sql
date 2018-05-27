--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.8
-- Dumped by pg_dump version 9.6.8

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO postgres;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: todoList; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."todoList" (
    "ID" integer DEFAULT nextval('public.user_id_seq'::regclass) NOT NULL,
    action character varying(256),
    done boolean
);


ALTER TABLE public."todoList" OWNER TO postgres;

--
-- Data for Name: todoList; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."todoList" ("ID", action, done) FROM stdin;
39	clean up the room	f
38	wake up at 8 am Sunday	t
40	wash the car	t
\.


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 40, true);


--
-- Name: todoList todoList_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."todoList"
    ADD CONSTRAINT "todoList_pkey" PRIMARY KEY ("ID");


--
-- PostgreSQL database dump complete
--

