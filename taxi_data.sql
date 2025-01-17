PGDMP      0            
    |         	   taxi_data    17.2    17.2     M           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            N           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            O           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            P           1262    24581 	   taxi_data    DATABASE     �   CREATE DATABASE taxi_data WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Indonesia.1252';
    DROP DATABASE taxi_data;
                     postgres    false                        3079    24591    postgis 	   EXTENSION     ;   CREATE EXTENSION IF NOT EXISTS postgis WITH SCHEMA public;
    DROP EXTENSION postgis;
                        false            Q           0    0    EXTENSION postgis    COMMENT     ^   COMMENT ON EXTENSION postgis IS 'PostGIS geometry and geography spatial types and functions';
                             false    2            �            1259    25670    trips    TABLE     3  CREATE TABLE public.trips (
    id integer NOT NULL,
    pickup_datetime timestamp without time zone,
    dropoff_datetime timestamp without time zone,
    pickup_location public.geography(Point,4326),
    dropoff_location public.geography(Point,4326),
    fare_amount numeric,
    trip_distance numeric
);
    DROP TABLE public.trips;
       public         heap r       postgres    false    2    2    2    2    2    2    2    2    2    2    2    2    2    2    2    2            �            1259    25669    trips_id_seq    SEQUENCE     �   CREATE SEQUENCE public.trips_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.trips_id_seq;
       public               postgres    false    224            R           0    0    trips_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.trips_id_seq OWNED BY public.trips.id;
          public               postgres    false    223            �           2604    25673    trips id    DEFAULT     d   ALTER TABLE ONLY public.trips ALTER COLUMN id SET DEFAULT nextval('public.trips_id_seq'::regclass);
 7   ALTER TABLE public.trips ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    224    223    224            �          0    24913    spatial_ref_sys 
   TABLE DATA           X   COPY public.spatial_ref_sys (srid, auth_name, auth_srid, srtext, proj4text) FROM stdin;
    public               postgres    false    219   ~       J          0    25670    trips 
   TABLE DATA           �   COPY public.trips (id, pickup_datetime, dropoff_datetime, pickup_location, dropoff_location, fare_amount, trip_distance) FROM stdin;
    public               postgres    false    224   �       S           0    0    trips_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.trips_id_seq', 1, false);
          public               postgres    false    223            �           2606    25677    trips trips_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.trips
    ADD CONSTRAINT trips_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.trips DROP CONSTRAINT trips_pkey;
       public                 postgres    false    224            �      x������ � �      J      x������ � �     