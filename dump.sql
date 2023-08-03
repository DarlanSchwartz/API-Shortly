--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    token character varying(255) NOT NULL,
    email character varying(255)
);


--
-- Name: sessions_new_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_new_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_new_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_new_id_seq OWNED BY public.sessions.id;


--
-- Name: short_urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.short_urls (
    id integer NOT NULL,
    shorturl character varying(50) NOT NULL,
    url text NOT NULL,
    usuario_id integer NOT NULL,
    visitcount integer DEFAULT 0,
    createdat timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: urls_encurtadas_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_encurtadas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_encurtadas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_encurtadas_id_seq OWNED BY public.short_urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL
);


--
-- Name: usuarios_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_new_id_seq'::regclass);


--
-- Name: short_urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.short_urls ALTER COLUMN id SET DEFAULT nextval('public.urls_encurtadas_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 'cc4d3ad0-9c10-4bad-b9df-ecc3193f65dd', 'darlanswtz@gmail.com');
INSERT INTO public.sessions VALUES (2, 'cec1d2b4-3a1c-4863-a49e-3835fcc189c6', 'darlanswtz@gmail.com');
INSERT INTO public.sessions VALUES (3, '7a42c811-62d5-4228-b2db-4a05b1725dba', 'darlanswtz@gmail.com');
INSERT INTO public.sessions VALUES (4, '370ce72f-b95b-4cd4-b988-3a031816dffa', 'darlanswtz@gmail.com');
INSERT INTO public.sessions VALUES (5, '8e9c1e88-bf86-464a-97e6-be7c6789b33d', 'darlanswtz@gmail.com');
INSERT INTO public.sessions VALUES (6, '3d5ec1c4-f726-40bc-9768-c689605ea680', 'darlanswtz@gmail.com');
INSERT INTO public.sessions VALUES (7, '9b5e7df7-cfd5-40c4-83bb-ea923a5bee1b', 'darlanswtz@gmail.com');
INSERT INTO public.sessions VALUES (8, '18cbdae2-1e7d-48c6-894d-80b0ace05ba0', 'darlanswtz@gmail.com');
INSERT INTO public.sessions VALUES (9, 'a4b75253-bd72-4296-85a3-1172c31c7722', 'darlanswtz@gmail.com');
INSERT INTO public.sessions VALUES (10, '11ce1dc7-e5aa-4fd4-97da-17e085c698ec', 'darlanswtz@gmail.com');
INSERT INTO public.sessions VALUES (11, '93916b63-1d5e-4dd3-8e5d-b55e210091cd', 'darlanswtz@gmail.com');
INSERT INTO public.sessions VALUES (12, '33e4baa9-bc8b-4bb3-8d05-2fdaf1730616', 'darlanswtz@gmail.com');
INSERT INTO public.sessions VALUES (13, '71a175f3-d46b-42cc-ac13-925a1d0d6b2f', 'darlanswtz@gmail.com');
INSERT INTO public.sessions VALUES (14, '8a5f260b-c3d5-4110-a81f-c258989fd699', 'darlanswtz@gmail.com');
INSERT INTO public.sessions VALUES (15, '92821a10-4982-4e11-9f65-1055b9c27761', 'darlanswtz@gmail.com');
INSERT INTO public.sessions VALUES (16, '66253afc-de3e-44c0-8686-aac44c55161f', 'darlanswtz@gmail.com');
INSERT INTO public.sessions VALUES (17, 'ccd6d527-40b0-4887-9de5-83105811bfe7', 'darlanswtz@gmail.com');
INSERT INTO public.sessions VALUES (18, 'b235f03a-241d-46fb-bece-e4c211f13de7', 'darlanswtz@gmail.com');
INSERT INTO public.sessions VALUES (19, '8d32750c-56df-4fbb-9a3f-3d8b2a6b098b', 'darlanswtz@gmail.com');


--
-- Data for Name: short_urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.short_urls VALUES (10, 'XlWy_E', 'asdsadasddsa', 1, 4, '2023-08-03 01:26:23.311313');
INSERT INTO public.short_urls VALUES (11, 'd4gzLv', 'http://localhost:5173/home', 1, 1, '2023-08-03 01:32:55.26787');
INSERT INTO public.short_urls VALUES (12, 'nuuh-z', 'https://hub.driven.com.br/avaliador/10635', 1, 1, '2023-08-03 01:33:07.947393');
INSERT INTO public.short_urls VALUES (13, 'iwe1r2', 'https://hub.driven.com.br/avaliador/10635', 1, 2, '2023-08-03 01:36:18.876536');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Darlan', 'darlanswtz@gmail.com', '1234');


--
-- Name: sessions_new_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_new_id_seq', 19, true);


--
-- Name: urls_encurtadas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_encurtadas_id_seq', 13, true);


--
-- Name: usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.usuarios_id_seq', 1, true);


--
-- Name: sessions sessions_new_pkey1; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_new_pkey1 PRIMARY KEY (id);


--
-- Name: short_urls urls_encurtadas_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.short_urls
    ADD CONSTRAINT urls_encurtadas_pkey PRIMARY KEY (id);


--
-- Name: short_urls urls_encurtadas_shorturl_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.short_urls
    ADD CONSTRAINT urls_encurtadas_shorturl_key UNIQUE (shorturl);


--
-- Name: users usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);


--
-- Name: short_urls urls_encurtadas_usuario_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.short_urls
    ADD CONSTRAINT urls_encurtadas_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

