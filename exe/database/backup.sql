--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4
-- Dumped by pg_dump version 13.4

-- Started on 2023-06-27 16:20:27

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

--
-- TOC entry 668 (class 1247 OID 635986)
-- Name: Lang; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public."Lang" AS ENUM (
    'en',
    'fr'
);


--
-- TOC entry 655 (class 1247 OID 635744)
-- Name: RecordAction; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public."RecordAction" AS ENUM (
    'CREATE',
    'UPDATE',
    'DELETE'
);


--
-- TOC entry 652 (class 1247 OID 635736)
-- Name: RequestStatus; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public."RequestStatus" AS ENUM (
    'PENDING',
    'SUCCESS',
    'ERROR'
);


SET default_table_access_method = heap;

--
-- TOC entry 202 (class 1259 OID 635688)
-- Name: Address; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Address" (
    id integer NOT NULL,
    "streetNumber" character varying(255) NOT NULL,
    street character varying(255) NOT NULL,
    zip character varying(255) NOT NULL,
    city character varying(255) NOT NULL,
    country character varying(255) NOT NULL,
    "placeId" character varying(255) NOT NULL
);


--
-- TOC entry 201 (class 1259 OID 635686)
-- Name: Address_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."Address_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3070 (class 0 OID 0)
-- Dependencies: 201
-- Name: Address_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."Address_id_seq" OWNED BY public."Address".id;


--
-- TOC entry 204 (class 1259 OID 635699)
-- Name: Person; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Person" (
    id integer NOT NULL,
    "firstName" character varying(255) NOT NULL,
    "lastName" character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    phone character varying(255),
    phone2 character varying(255),
    "addressId" integer
);


--
-- TOC entry 203 (class 1259 OID 635697)
-- Name: Person_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."Person_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3071 (class 0 OID 0)
-- Dependencies: 203
-- Name: Person_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."Person_id_seq" OWNED BY public."Person".id;


--
-- TOC entry 210 (class 1259 OID 635762)
-- Name: Record; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Record" (
    id integer NOT NULL,
    date timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    action public."RecordAction" NOT NULL,
    object character varying(255) NOT NULL,
    "newValue" character varying(255) NOT NULL,
    "authorId" integer NOT NULL
);


--
-- TOC entry 209 (class 1259 OID 635760)
-- Name: Record_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."Record_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3072 (class 0 OID 0)
-- Dependencies: 209
-- Name: Record_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."Record_id_seq" OWNED BY public."Record".id;


--
-- TOC entry 208 (class 1259 OID 635753)
-- Name: Request; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Request" (
    id integer NOT NULL,
    date timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    status public."RequestStatus" NOT NULL,
    response jsonb NOT NULL
);


--
-- TOC entry 207 (class 1259 OID 635751)
-- Name: Request_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."Request_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3073 (class 0 OID 0)
-- Dependencies: 207
-- Name: Request_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."Request_id_seq" OWNED BY public."Request".id;


--
-- TOC entry 206 (class 1259 OID 635710)
-- Name: User; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    login character varying(255) NOT NULL,
    admin boolean DEFAULT false NOT NULL,
    password character varying(255),
    active boolean DEFAULT true NOT NULL,
    "connexionToken" character varying(255) DEFAULT ''::character varying NOT NULL,
    "personId" integer NOT NULL,
    lang public."Lang" DEFAULT 'en'::public."Lang" NOT NULL
);


--
-- TOC entry 205 (class 1259 OID 635708)
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3074 (class 0 OID 0)
-- Dependencies: 205
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- TOC entry 200 (class 1259 OID 635676)
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


--
-- TOC entry 2895 (class 2604 OID 635691)
-- Name: Address id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Address" ALTER COLUMN id SET DEFAULT nextval('public."Address_id_seq"'::regclass);


--
-- TOC entry 2896 (class 2604 OID 635702)
-- Name: Person id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Person" ALTER COLUMN id SET DEFAULT nextval('public."Person_id_seq"'::regclass);


--
-- TOC entry 2904 (class 2604 OID 635765)
-- Name: Record id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Record" ALTER COLUMN id SET DEFAULT nextval('public."Record_id_seq"'::regclass);


--
-- TOC entry 2902 (class 2604 OID 635756)
-- Name: Request id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Request" ALTER COLUMN id SET DEFAULT nextval('public."Request_id_seq"'::regclass);


--
-- TOC entry 2897 (class 2604 OID 635713)
-- Name: User id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- TOC entry 3056 (class 0 OID 635688)
-- Dependencies: 202
-- Data for Name: Address; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Address" (id, "streetNumber", street, zip, city, country, "placeId") FROM stdin;
\.


--
-- TOC entry 3058 (class 0 OID 635699)
-- Dependencies: 204
-- Data for Name: Person; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Person" (id, "firstName", "lastName", email, phone, phone2, "addressId") FROM stdin;
1	Foo	Bar	foo@b.ar	111111	\N	\N
2	Test	Test	test@test.te	10101	\N	\N
\.


--
-- TOC entry 3064 (class 0 OID 635762)
-- Dependencies: 210
-- Data for Name: Record; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Record" (id, date, action, object, "newValue", "authorId") FROM stdin;
\.


--
-- TOC entry 3062 (class 0 OID 635753)
-- Dependencies: 208
-- Data for Name: Request; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Request" (id, date, status, response) FROM stdin;
\.


--
-- TOC entry 3060 (class 0 OID 635710)
-- Dependencies: 206
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."User" (id, login, admin, password, active, "connexionToken", "personId", lang) FROM stdin;
2	test	f	$2b$10$hODGYPx73gOV.Mpsx75QvuvEqm3RDaIpy9wO5vqil4T.SvBidYF2q	t		2	fr
1	admin	t	$2b$10$8Rs2Kgh3SZOMF.0ePkTaYujTb0K2CwDzZca9K4gt0K3e022N81972	t	dDhkMnkyeW1sbnwyMDIzLTA2LTI4VDA3OjU3OjI4LjQ0MFo=	1	en
\.


--
-- TOC entry 3054 (class 0 OID 635676)
-- Dependencies: 200
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
eebb45e7-65fd-4a4e-9e33-6d57753cb46a	e2534f6dc3238a7a720672503ed2ad20aa25819f854f82b634d854aef4e09634	2023-01-12 14:33:54.415496+01	20221218151940_init	\N	\N	2023-01-12 14:33:54.39342+01	1
9ed68e1e-f156-468f-ae43-1092fb18239b	1581c7ce0642e56e19f6d8b1a4ee38aa3e5353786380bfffe3c2523aab284df7	2023-01-12 14:33:54.42617+01	20221218165317_request_record	\N	\N	2023-01-12 14:33:54.416102+01	1
5573123b-693b-4c33-976b-ed91acf18011	3b1bc2814b1ef468d65c5d9cd71b63e0dbe27717d720c77b01e48ed23cd7fa75	2023-01-12 14:33:54.430145+01	20221218165545_request_response	\N	\N	2023-01-12 14:33:54.426568+01	1
f54c3615-2d2c-47f4-9f84-8794b3952110	ac7267def66206f063a4ec3e4d2ebe1a39124f6bb8b2c8eed5673564c1f1a0f9	2023-01-12 14:33:54.433878+01	20221218173150_person_address_optional	\N	\N	2023-01-12 14:33:54.430559+01	1
a3e5fe90-1c60-49ab-94e2-074493723316	5a2060dd43954e5f202e4e40720c194aba507a0b906b189effbd1e2f5a62b3db	2023-01-12 14:33:55.737143+01	20230112133355_	\N	\N	2023-01-12 14:33:55.735355+01	1
\.


--
-- TOC entry 3075 (class 0 OID 0)
-- Dependencies: 201
-- Name: Address_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."Address_id_seq"', 1, false);


--
-- TOC entry 3076 (class 0 OID 0)
-- Dependencies: 203
-- Name: Person_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."Person_id_seq"', 2, true);


--
-- TOC entry 3077 (class 0 OID 0)
-- Dependencies: 209
-- Name: Record_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."Record_id_seq"', 1, false);


--
-- TOC entry 3078 (class 0 OID 0)
-- Dependencies: 207
-- Name: Request_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."Request_id_seq"', 1, false);


--
-- TOC entry 3079 (class 0 OID 0)
-- Dependencies: 205
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."User_id_seq"', 2, true);


--
-- TOC entry 2909 (class 2606 OID 635696)
-- Name: Address Address_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Address"
    ADD CONSTRAINT "Address_pkey" PRIMARY KEY (id);


--
-- TOC entry 2912 (class 2606 OID 635707)
-- Name: Person Person_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Person"
    ADD CONSTRAINT "Person_pkey" PRIMARY KEY (id);


--
-- TOC entry 2920 (class 2606 OID 635771)
-- Name: Record Record_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Record"
    ADD CONSTRAINT "Record_pkey" PRIMARY KEY (id);


--
-- TOC entry 2918 (class 2606 OID 635759)
-- Name: Request Request_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Request"
    ADD CONSTRAINT "Request_pkey" PRIMARY KEY (id);


--
-- TOC entry 2916 (class 2606 OID 635721)
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- TOC entry 2907 (class 2606 OID 635685)
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- TOC entry 2910 (class 1259 OID 635722)
-- Name: Person_addressId_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "Person_addressId_key" ON public."Person" USING btree ("addressId");


--
-- TOC entry 2913 (class 1259 OID 635723)
-- Name: User_login_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "User_login_key" ON public."User" USING btree (login);


--
-- TOC entry 2914 (class 1259 OID 635724)
-- Name: User_personId_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "User_personId_key" ON public."User" USING btree ("personId");


--
-- TOC entry 2921 (class 2606 OID 635780)
-- Name: Person Person_addressId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Person"
    ADD CONSTRAINT "Person_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES public."Address"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2923 (class 2606 OID 635772)
-- Name: Record Record_authorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Record"
    ADD CONSTRAINT "Record_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 2922 (class 2606 OID 635730)
-- Name: User User_personId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_personId_fkey" FOREIGN KEY ("personId") REFERENCES public."Person"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


-- Completed on 2023-06-27 16:20:27

--
-- PostgreSQL database dump complete
--

